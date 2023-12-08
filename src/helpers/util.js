
//Production URL
//loans-api-production.up.railway.app/loans

//DEV
//http://localhost:8080/loans'

export const request = async () => {
    try {
        const response = await fetch('https://loans-api-production.up.railway.app/loans')
        const data = await response.json()
        return data
    }
    catch {error => console.log(error)}
}