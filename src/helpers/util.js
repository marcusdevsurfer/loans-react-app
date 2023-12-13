export const request = async () => {
    const env = import.meta.env
    try {
        const response = await fetch(env.VITE_BASE_URL+'loans')
        const data = await response.json()
        return data
    }
    catch {error => console.log(error)}
}