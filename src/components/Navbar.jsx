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

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>
                                Prestamos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/finance"}>
                                Finanzas
                            </Link>
                        </li>
                    </ul>

                    <div className="nav-item">
                        <p className="navbar-brand m-0 pe-2 fs-6">Bienvenido, <strong>{name}</strong></p>
                    </div>

                    <div className="nav-item">
                        <form className="" onSubmit={handleLogOut}>
                            <button type="submit" className="btn btn-sm btn-outline-danger">Cerrar sesion</button>
                        </form>
                    </div>


                </div>



            </div>
        </nav>
    )
}
