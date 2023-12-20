import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { AddLoanForm } from './AddLoanForm';


export const LoansSummary = ({ data }) => {

    const [dataFiltered, setDataFiltered] = useState([])

    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)
    const { name } = userObj

    const caltLoansTotal = () => {
        let total = 0
        dataFiltered.map((e) => {
            total = e.quantity + total
        })
        const internationalNumberFormat = new Intl.NumberFormat('en-US')
        const numberFormated = internationalNumberFormat.format(total)
        const totalFormated = numberFormated + '.00'
        return totalFormated
    }

    useEffect(() => {
        const result = data.filter((loan) => loan.user === name)
        setDataFiltered(result)
    }, [])

    return (
        <div className='mb-3 d-flex flex-column align-items-center justify-content-center'>
            <div>
                <p>Activos: <span className='bg-secondary' style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: 'white'
                }}>{dataFiltered.length}</span></p>
            </div>
            <div className='mb-3 d-flex align-items-center'>

                    <input style={{
                        border : 'none',
                    }}  disabled={true} id='totalAmount' type="text" className='form-control p-0 text-center' value={caltLoansTotal()} />

                    <FaEye className='fs-2 m-1' onClick={() => {
                        const totalAmount = document.getElementById('totalAmount')
                        const {type} = totalAmount

                        if(type === 'text'){
                            totalAmount.type='password'
                        }else if(type === 'password'){
                            totalAmount.type='text'
                        }
                    }} />
            </div>
            <AddLoanForm />
        </div>
    )
}
