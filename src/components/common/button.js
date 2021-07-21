import PropTypes from 'prop-types'

import '../../assets/sass/button.sass'

//buttonType can be either 'is-primary' or 'is-secondary'. Default: 'is-secondary'
const Button = ({buttonText='', onClick=f=>f, buttonType='is-secondary'}) => (
    <button className={`button ${buttonType}`} onClick={onClick}>
        {buttonText}
    </button>
)

Button.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
    buttonType: PropTypes.string
}

export default Button