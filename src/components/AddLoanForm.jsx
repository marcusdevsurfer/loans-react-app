import { useState } from "react"

export const AddLoanForm = () => {

    const env = import.meta.env

    const [person, setPerson] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [percent, setPercent] = useState(0)

    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)
    const { name } = userObj



    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }



    const onFormSubmit = (e) => {

        e.preventDefault()

        const loan = {
            person: person,
            quantity: quantity,
            percent: percent,
            user: name
        }

        if (loan.person === '' || loan.quantity === 0) {
            return
        }

        postData(env.VITE_BASE_URL + 'loans', loan)
            .then(data => {
                if (data.ok) {
                    window.location.reload()
                }
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="mb-3 ">
            
            <button type="button" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#addLoanFormModal">
                Agregar
            </button>

            <div className="modal fade" id="addLoanFormModal" tabIndex={-1} aria-labelledby="addLoanFormLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addLoanFormLabel">Agregar prestamo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onFormSubmit} className='form'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
