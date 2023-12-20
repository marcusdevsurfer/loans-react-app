import React, { useEffect, useState } from 'react'
import { AddLoanForm } from './AddLoanForm';
import { LoansTotalAmount } from './LoansTotalAmount';
import { LoansActiveTotal } from './LoansActiveTotal';


export const LoansSummary = ({ data }) => {

    const [dataFiltered, setDataFiltered] = useState([])

    const user = sessionStorage.getItem('user')
    const userObj = JSON.parse(user)
    const { name } = userObj

    useEffect(() => {
        const dataByUsername = data.filter((loan) => loan.user === name)
        setDataFiltered(dataByUsername)
    }, [])

    return (
        <div className='mb-3 d-flex flex-column align-items-center justify-content-center'>
            <LoansActiveTotal dataFiltered={dataFiltered} />
            <LoansTotalAmount dataFiltered={dataFiltered} />
            <AddLoanForm />
        </div>
    )
}
