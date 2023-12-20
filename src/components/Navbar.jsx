import { useEffect, useState } from "react"

export const Navbar = () => {

    const [user, setUser] = useState({})

    const {name, role} = user


    const handleLogOut = () => {
        sessionStorage.clear()
    }

    useEffect(() => {
        const actualUser = sessionStorage.getItem('user')
        const userObj = JSON.parse(actualUser)
        setUser(userObj)
    },[])

    return (
        <div className='d-flex justify-content-end w-100' >
            <div className="p-2">
                <p>Bienvenido, <strong>{name}</strong></p>
            </div>
            <div className="p-2">
                <form onSubmit={handleLogOut}>
                    <button type="submit" className="btn-sm btn btn-danger">Cerrar sesion</button>
                </form>
            </div>
        </div>
    )
}
