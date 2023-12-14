export const Navbar = () => {

    const handleLogOut = () => {
        localStorage.clear()
    }

    return (
        <div className='d-flex justify-content-end w-100' >
            <div className="p-2">
                <p>Bienvenido, <strong>{localStorage.getItem('user').charAt(0).toUpperCase()+localStorage.getItem('user').slice(1)}</strong></p>
            </div>
            <div className="p-2">
                <form onSubmit={handleLogOut}>
                    <button type="submit" className="btn-sm btn btn-danger">Cerrar sesion</button>
                </form>
            </div>
        </div>
    )
}
