const ENV = import.meta.env

export const fetchAllLoans = async () => {
    const URL_FIX = 'api/v1/loans'
    const response = await fetch(ENV.VITE_BASE_URL + URL_FIX)
    const data = await response.json()
    return data
}

export const deleteLoan = async (e) => {
    const { target } = e
    const URL_FIX = 'loans/'
    const response = await fetch(ENV.VITE_BASE_URL + URL_FIX + target.value, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    response.status === 200 ? window.location.reload() : console.log(response)
}

export const addLoan = async (data = {}) => {
    const URL_FIX = 'loans/'
    const response = await fetch(ENV.VITE_BASE_URL + URL_FIX, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
