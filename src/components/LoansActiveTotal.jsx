
export const LoansActiveTotal = ({dataFiltered}) => {
    return (
        <div>
            <p>Activos: <span className='bg-secondary' style={{
                paddingLeft: '1rem',
                paddingRight: '1rem',
                color: 'white'
            }}>{dataFiltered.length}</span></p>
        </div>
    )
}
