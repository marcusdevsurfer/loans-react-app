
export const Loan = ({ loan }) => {

  const { loanId, person, quantity } = loan

  const deleteLoan = (e) => {

    fetch('loans-api-production.up.railway.app/loans/' + e.target.value, {
      method: 'DELETE',
      mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
    })
      .then(res => res.text()) // or res.json()
      .then(res => window.location.reload())
      
  }

  return (
    <div className="mb-3" key={loanId}>
      <h3>{person}</h3>
      <p>{quantity}</p>
      <button value={loanId} className="btn btn-danger" onClick={deleteLoan}>Borrar</button>
    </div>
  )
}
