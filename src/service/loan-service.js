const env = import.meta.env

export const fetchAllLoans = async () => {
    const URL_FIX = 'api/v1/loans'
    const response = await fetch(env.VITE_BASE_URL + URL_FIX)
    const data = await response.json()
    return data
}

export const deleteLoan = async (e) => {
    const URL_FIX = 'loans/'
    const response = await fetch(env.VITE_BASE_URL + URL_FIX + e.target.value, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    response.status === 200 ? window.location.reload() : console.log(response)
}
