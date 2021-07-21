import PropTypes from 'prop-types'
import '../../assets/sass/input.sass'

const Input = ({name='', placeholder='', type='text', onChange=f=>f, value=''}) => (
    <input className='input' 
        name={name}
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}/>
)


Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input