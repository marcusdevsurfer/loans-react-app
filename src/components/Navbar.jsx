export const Navbar = () => {
    return (
        <div className='d-flex justify-content-end w-100' >
            <div className="p-2">
                Bienvenido, {localStorage.getItem('user')}
            </div>
        </div>
    )
}
