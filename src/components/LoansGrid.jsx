import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { request } from "../helpers/util"

const LoansTitle = () => (
    <h1>Prestamos Activos</h1>
)

const LoadingLoans = () => (
    <h2>Cargando..</h2>
)

const NotExistLoansMessage = () => (
    <h2>No existen registros.</h2>
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
                <div>
                    <LoansTitle />
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
