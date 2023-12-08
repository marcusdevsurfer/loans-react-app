import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { request } from "../helpers/util"

const LoansTitle = () => (
    <h1>Prestamos Activos</h1>
)

const NotExistLoansMessage = () => (
    <h1>No existen prestamos registrados.</h1>
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
            <div>
                <LoansTitle />
                {
                    loansData.map(loan => (
                        <Loan key={loan.loanId} loan={loan}/>
                    ))
                }
            </div >
            :
            <div>
               <NotExistLoansMessage/>
            </div>
    )
}
