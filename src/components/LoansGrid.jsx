import { useEffect, useState } from "react"
import { Loan } from "./Loan"
import { request } from "../helpers/util"

const LoansTitle = ({ data }) => (
    data.length > 0
        ?
        <div className="d-flex align-items-center">

            <h2 className="me-2">Prestamos activos</h2>

            <div className="bg-secondary text-center" style={{
                width: '3rem',
                borderRadius: '10%',
                color: 'white'
            }}>
                {data.length}
            </div>

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
                <div>
                    <LoansTitle data={loansData} />
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
