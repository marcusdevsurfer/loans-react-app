import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"


export const Navbar = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const { name, role } = user


    const handleLogOut = () => {
        sessionStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        const actualUser = sessionStorage.getItem('user')
        const userObj = JSON.parse(actualUser)
        setUser(userObj)
    }, [])

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid">
                <div className="d-flex m-1">

                    <Link className="btn btn-sm btn-secondary mx-1 d-flex align-items-center" style={{
                        textDecoration: "none",
                        color: "white",

                    }} to={"/"}>Prestamos
                    </Link>

                </div>

                <div className="d-flex m-1">
                    <div className="px-2">
                        <p>Bienvenido, <strong>{name}</strong></p>
                    </div>
                    <div className="px-2">
                        <form onSubmit={handleLogOut}>
                            <button type="submit" className="btn-sm btn btn-danger">Cerrar sesion</button>
                        </form>
                    </div>
                </div>

            </div>
        </nav>
    )
}
