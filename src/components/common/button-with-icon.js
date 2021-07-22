import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import '../../assets/sass/button.sass'

const ButtonWithIcon = ({buttonText='', onClick=f=>f, buttonType='is-secondary', disabled=false, icon=''}) => (
    <button className={`button ${buttonType}`} onClick={onClick} disabled={disabled}>
        <div className='button-content'>
            <span className='button-text'>
                {buttonText}
            </span>

            {icon.length ? 
            (
            <span className='button-icon'>
                <FontAwesomeIcon icon={[icon]} />
            </span>
            ) :
            null}
        </div>


    </button>
)

ButtonWithIcon.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string
}

export default ButtonWithIcon