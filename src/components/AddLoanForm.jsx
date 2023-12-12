import { useState } from "react"

export const AddLoanForm = () => {

    const env = import.meta.env


    const [person, setPerson] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [percent, setPercent] = useState(0)

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
      
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data) 
        });
        return response.json();
    }



     const onFormSubmit =  (e) => {
        const loan = {
            "person": person,
            "quantity": quantity,
            "percent": percent
        }
        
        if (loan.person === '') {
            return
        }

        postData(env.VITE_BASE_URL+'loans', loan)
            .then(data => {
                console.log(data)
            });

    }

    return (
        <>
            <h2 className="mb-3">Agregar</h2>
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

                <div className='mb-3 text-center'>
                    <button type='submit' className='btn btn-sm btn-success'>Agregar</button>
                </div>
            </form>

        </>

    )
}
