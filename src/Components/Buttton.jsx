import PropTypes from 'prop-types'


const Button = ({children, onClick}) => {
  return (
    <button className='bg-[#e49115] outline-none text-white py-2 md:py-4 px-4 md:px-8 font-medium rounded text-lg' onClick={onClick}>
      {children}
    </button>
  )
}



export default Button

Button.propTypes = {
    children : PropTypes.string,
    onClick: PropTypes.func
}