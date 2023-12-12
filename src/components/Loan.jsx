
export const Loan = ({ loan }) => {

  const env = import.meta.env

  const { loanId, person, quantity } = loan

  const deleteLoan = (e) => {

    fetch(env.VITE_BASE_URL+'loans/' + e.target.value, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then(res => {
        window.location.reload()
      })

  }

  return (
    <div className="mb-3 d-flex  justify-content-around" key={loanId}>
      <div className="p-1">
        <h3>{person}</h3>
        <p>{quantity}</p>
      </div>
      <div className="p-1">
        <button value={loanId} className="btn btn-sm btn-danger" onClick={deleteLoan}>Borrar</button>
      </div>

    </div>
  )
}
