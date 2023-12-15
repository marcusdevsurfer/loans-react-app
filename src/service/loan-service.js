const env = import.meta.env

export const fetchAllLoans = async() => {
    const URL_FIX = 'api/v1/loans'
    const response = await fetch(env.VITE_BASE_URL+URL_FIX)
    const data = await response.json()
    return data
}
