
//Production URL
//loans-api-production.up.railway.app/loans

export const request = async () => {
    try {
        const response = await fetch('http://localhost:8080/loans')
        const data = await response.json()
        return data
    }
    catch {error => console.log(error)}
}