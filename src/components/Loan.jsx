import { deleteLoan } from "../service/loan-service"

export const Loan = ({ loan }) => {
  const { loanId, person, quantity } = loan

  const formatLoanQuantity = (quantity) => {
    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    const numberFormated = internationalNumberFormat.format(quantity)
    const totalFormated = numberFormated + '.00'
    return totalFormated
  }

  return (
    <div className="mb-3 d-flex justify-content-around" key={loanId}>
      <div className="p-1">
        <h3>{person}</h3>
        <p>${formatLoanQuantity(quantity)}</p>
      </div>
      <div className="p-1">
        <button value={loanId} className="btn btn-sm btn-danger" onClick={deleteLoan}>Borrar</button>
      </div>
    </div>
  )
}
