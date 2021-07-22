import PropTypes from 'prop-types'
import '../../assets/sass/input.sass'

const Input = ({name='', placeholder='', type='text', onChange=f=>f, value='', disabled=false}) => (
    <input className='input' 
        name={name}
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}/>
)


Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool
}

export default Input