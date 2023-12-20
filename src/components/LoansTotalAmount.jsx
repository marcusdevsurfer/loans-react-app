import { FaEye } from "react-icons/fa";

export const LoansTotalAmount = ({ dataFiltered }) => {

    const caltLoansTotal = () => {
        let total = 0
        dataFiltered.map((e) => {
            total = e.quantity + total
        })
        const internationalNumberFormat = new Intl.NumberFormat('en-US')
        const numberFormated = internationalNumberFormat.format(total)
        const totalFormated = '$' + numberFormated + '.00'
        return totalFormated
    }


    return (
        <div className='mb-3 d-flex align-items-center'>

            <input style={{
                border: 'none',
            }} disabled={true} id='totalAmount' type="text" className='form-control p-0 text-center' value={caltLoansTotal()} />

            <FaEye className='fs-2 m-1' onClick={() => {
                const totalAmount = document.getElementById('totalAmount')
                const { type } = totalAmount

                if (type === 'text') {
                    totalAmount.type = 'password'
                } else if (type === 'password') {
                    totalAmount.type = 'text'
                }
            }} />
        </div>
    )
}
