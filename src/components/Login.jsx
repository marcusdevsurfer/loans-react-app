import { useState } from "react"
export const Login = () => {

    const [username, setUsername] = useState('')


    const validateLogin = (e) => {
        e.preventDefault()
        const {target} = e
        const usernameValue = target.username.value
        if(usernameValue === 'Marcus'){
            localStorage.setItem('user',usernameValue)
            window.location.reload()
        }else {
            alert('Acceso denegado')
            window.location.reload()
        }
    }   

    

    return (
        <div className='container text-center'>
            <h3>Iniciar sesión</h3>
            <form action="" onSubmit={validateLogin}>
                <input className='form-control mb-3' value={username} name='username' id='username' onChange={(e) => setUsername(e.target.value)} type="text" />
                <button className="btn btn-success " type="submit">Entrar</button>
            </form>
        </div>
    )
}
