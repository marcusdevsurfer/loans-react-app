import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { request } from "../helpers/util"
import { LoansSummary } from "./LoansSummary"

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

const NotExistLoansMessage = ({ data }) => (
    <h2>No hay registros</h2>
)

export const LoansGrid = () => {

    const [loansData, setLoansData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        request()
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
            loansData.length > 0
                ?
                <div className="m-3">
                    <LoansTitle data={loansData} />
                    <LoansSummary data={loansData} />
                    {
                        loansData.map(loan => (
                            <Loan key={loan.loanId} loan={loan} />
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
