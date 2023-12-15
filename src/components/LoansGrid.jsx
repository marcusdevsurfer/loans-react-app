import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { LoansSummary } from "./LoansSummary"
import { fetchAllLoans } from "../service/loan-service"

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
    <h2>No hay registros</h2>
)

export const LoansGrid = () => {

    const [loansData, setLoansData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
        
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
            loansData.length > 0
                ?
                <div className="m-3">
                    <LoansTitle data={loansData} />
                    <LoansSummary data={loansData} />
                    {
                        loansData.filter((loan) => loan.user === localStorage.getItem('user')).map((loan) => (
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
