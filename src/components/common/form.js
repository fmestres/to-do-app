import PropTypes from 'prop-types'
import Input from "./input"
import Button from "./button"

import '../../assets/sass/form.sass'


const Form = ({fields, inputValues ,updateState=f=>f, onSubmit=f=>f, children=[], submitButton='', isSubmitting=false, hasBeenSubmitted=false}) => {


    function handleSubmit(e) {
        e.preventDefault()
        onSubmit()
    }

    function handleChange(e) {
        updateState([e.target.name], e.target.value)
    }

    return (
        <form className='form'>
            <div className='input-container'>
                {fields.map((field, i) => (
                    <Input key={i} name={field.name} 
                        type={field.type || 'text'} 
                        placeholder={field.placeholder} 
                        value={inputValues[field.name]} 
                        onChange={handleChange}
                        required={field.required}
                        disabled={isSubmitting || hasBeenSubmitted}/>
                ))}
            </div>
            <Button buttonType='is-primary is-fluid' 
                    buttonText={submitButton} 
                    onClick={handleSubmit} 
                    disabled={isSubmitting || hasBeenSubmitted} 
                    isLoading={isSubmitting}
                    isSuccess={hasBeenSubmitted}/>
            {children}
        </form>
    )
    

}

Form.propTypes = {
    updateState: PropTypes.func,
    onSubmit: PropTypes.func,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    submitButton: PropTypes.string,
    inputValues: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    isSubmitting: PropTypes.bool,
    hasBeenSubmitted: PropTypes.bool
}


export default Form