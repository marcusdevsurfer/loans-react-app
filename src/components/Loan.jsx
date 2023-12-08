
export const Loan = ({loan}) => {

  const {loanId, person, quantity} = loan
  
  return (
    <div key={loanId}>
      <h3>{person}</h3>
      <p>{quantity}</p>
    </div>
  )
}
