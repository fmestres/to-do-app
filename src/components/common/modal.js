import '../../assets/sass/modal.sass'
import Button from './button'
import PropTypes from 'prop-types'

const Modal = ({isActive=false, children, onClose=f=>f}) => (
    <div className='modal-container' style={{display: isActive ? 'block' : 'none'}}>
        <div className='modal'>
            <div className='modal-top'>
                <Button buttonType='is-delete' onClick={onClose}/>
            </div>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    </div>
)

Button.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClose: PropTypes.func
}

export default Modal