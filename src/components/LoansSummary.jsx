import React from 'react'

export const LoansSummary = ({ data }) => {

    const caltLoansTotal = () => {
        let total = 0
        data.map((e) => {
            total = e.quantity+total
        })
        return total
    }

    return (
        <div className='d-flex justify-content-between'>
            <div>
                <p>Activos: <span className='bg-secondary' style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: 'white'
                }}>{data.length}</span></p>
            </div>
            <div>
                <p>Total: <span className='bg-success' style={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: 'white'
                }}>{caltLoansTotal()}</span></p>
            </div>
        </div>
    )
}
