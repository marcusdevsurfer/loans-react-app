export const fetchAllUsers = async() => {
    const env = import.meta.env
    const URL_FIX = 'users'
    const response = await fetch(env.VITE_BASE_URL+URL_FIX)
    const data = await response.json()
    return data
}