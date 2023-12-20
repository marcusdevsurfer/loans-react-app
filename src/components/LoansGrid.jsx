import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { LoansSummary } from "./LoansSummary"
import { fetchAllLoans } from "../service/loan-service"
import { AddLoanForm } from "./AddLoanForm"

const LoansTitle = ({ data }) => (
    data.length > 0
        ?
        <div className="text-center">
            <h2>Prestamos</h2>
        </div>
        :
        null
)

const LoadingLoans = () => (
    <h2>Cargando..</h2>
)

const NotExistLoansMessage = () => (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <AddLoanForm />
        <h2>No hay registros</h2>
    </div>
)

export const LoansGrid = () => {

    const [loansData, setLoansData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)

    const loansDataFilteredByUser = loansData.filter((loan) => loan.user === userObj.name)


    useEffect(() => {

        fetchAllLoans()
            .then(
                data => {
                    setLoansData(data)
                    setIsLoaded(true)
                }
            )
            .catch(error => {
                setIsLoaded(false)
            })

    }, [])

    return (
        isLoaded
            ?
            loansDataFilteredByUser.length > 0
                ?
                <div className="m-3">
                    <LoansTitle data={loansDataFilteredByUser} />
                    <LoansSummary data={loansData} />
                    {
                        loansDataFilteredByUser.map((loan) => (
                            <Loan key={loan.loanId} loan={loan}></Loan>
                        ))
                    }
                </div >
                :
                <NotExistLoansMessage />
            :
            <div>
                <LoadingLoans />
            </div>
    )
}
