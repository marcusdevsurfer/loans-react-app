import { useState } from "react"

export const AddLoanForm = () => {

    const [person, setPerson] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [percent, setPercent] = useState(0)

    // Ejemplo implementando el metodo POST:
    async function postData(url = '', data = {}) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }



    const onFormSubmit = (e) => {
        e.preventDefault()
        const loan = {
            "person": person,
            "quantity": quantity,
            "percent": percent
        }
        if (loan.person === '') {
            return
        }

        postData('http://localhost:8080/loans', loan)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });

    }

    return (
        <>
            <h1 className="mb-3">Agregar</h1>
            <form onSubmit={onFormSubmit} className='form w-50'>
                <div className='mb-3'>
                    <label htmlFor="person">Persona</label>
                    <input value={person} type="text" className='form-control' id='person' onChange={e => setPerson(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="quantity">Cantidad</label>
                    <input value={quantity} type="number" className='form-control' id='quantity' onChange={e => setQuantity(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="percent">Porciento de Interes</label>
                    <input value={percent} type="number" className='form-control' id='percent' onChange={e => setPercent(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <button type='submit' className='btn btn-success'>Agregar</button>
                </div>
            </form>

        </>

    )
}
