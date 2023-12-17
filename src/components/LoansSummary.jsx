import React, { useEffect, useState } from 'react'

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
        return total
    }

    useEffect(() => {
        const result = data.filter((loan) => loan.user === name)
        setDataFiltered(result)
    }, [])

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div>
                <p>Activos: <span className='bg-secondary' style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: 'white'
                }}>{dataFiltered.length}</span></p>
            </div>
            <div>
                <p>Total: <span className='bg-success' style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: 'white'
                }}>${caltLoansTotal()}</span></p>
            </div>
        </div>
    )
}
