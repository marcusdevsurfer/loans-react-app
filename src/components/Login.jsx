import { useEffect, useState } from "react"
import { fetchAllUsers } from "../service/user-service"

export const Login = () => {

    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')

    const validateInputText = (value) => {
        const valueTrimed = value.trim()
        const valueToLowerCase = valueTrimed.toLowerCase()
        const textValidated = valueToLowerCase
        return textValidated
    }

    const validateLogin = (e) => {
        e.preventDefault()
        const { target } = e

        const usernameInputValue = validateInputText(target.username.value)

        const queryResult = users.find(user => user.name === usernameInputValue)

        if (queryResult === undefined || queryResult === null) {
            localStorage.clear()
            alert('No registrado')
            window.location.reload()
        } else {
            const userJSON = JSON.stringify(queryResult)
            localStorage.setItem('user', userJSON)
            window.location.reload()
        }
    }

    useEffect(() => {
        fetchAllUsers().then(data => {
            setUsers(data)
        })
    }, [])



    return (
        <div className='container d-flex flex-column align-items-center justify-content-center text-center' style={{ 'height': '100vh' }}>
            <h3>Iniciar sesión</h3>
            <form action="" onSubmit={validateLogin}>
                <input className='form-control mb-3' value={username} name='username' id='username' onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Usuario" />
                <button className="btn btn-success " type="submit">Entrar</button>
            </form>
        </div>
    )
}
