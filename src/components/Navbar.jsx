export const Navbar = () => {

    const handleLogOut = () => {
        localStorage.removeItem('user')
    }

    return (
        <div className='d-flex justify-content-end w-100' >
            <div className="p-2">
                <p>Bienvenido, {localStorage.getItem('user')}</p>
            </div>
            <div className="p-2">
                <form onSubmit={handleLogOut}>
                    <button type="submit" className="btn-sm btn btn-danger">Cerrar sesion</button>
                </form>
            </div>
        </div>
    )
}
