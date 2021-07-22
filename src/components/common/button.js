import PropTypes from 'prop-types'

import '../../assets/sass/button.sass'
import '../../assets/sass/loading.sass'

//buttonType can be either 'is-primary' or 'is-secondary'. Default: 'is-secondary'
const Button = ({buttonText='', onClick=f=>f, buttonType='is-secondary', disabled=false, isLoading=false, isSuccess=false, successMessage=''}) => (
    <button className={`button ${buttonType} ${isLoading ? 'is-loading' : ''} ${isSuccess ? 'is-success' : ''}`} onClick={onClick} disabled={disabled}>
        {isSuccess ? successMessage : buttonText}
    </button>
)

Button.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    successMessage: PropTypes.string
}

export default Button