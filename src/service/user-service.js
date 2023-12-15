const env = import.meta.env

export const fetchAllUsers = async() => {
    const URL_FIX = 'api/users'
    const response = await fetch(env.VITE_BASE_URL+URL_FIX)
    const data = await response.json()
    return data
}

export const fetchUserById = async(id) => {
    const URL_FIX = 'api/users/'+id
    const response = await fetch(env.VITE_BASE_URL+URL_FIX)
    console.log(response)
}