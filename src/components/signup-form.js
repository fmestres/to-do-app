import Button from "./common/button"
import FormWrapper from "./common/form-wrapper"
import SignupFormSchema from "./schemas/signup-form-schema"
import PropTypes from 'prop-types'

const SignupForm = ({secondaryAction=f=>f}) => (
    <FormWrapper formSchema={SignupFormSchema} submitEndpoint=''>
        <Button buttonType='is-secondary is-fluid' buttonText='Already have an account' onClick={secondaryAction}/>
    </FormWrapper>
)

SignupForm.propTypes = {
    secondaryAction: PropTypes.func
}

export default SignupForm