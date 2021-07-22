import Button from "./common/button"
import FormWrapper from "./common/form-wrapper"
import LoginFormSchema from "./schemas/login-form-schema"
import PropTypes from 'prop-types'

const LoginForm = ({secondaryAction=f=>f}) => (
    <FormWrapper formSchema={LoginFormSchema} submitEndpoint=''>
        <Button buttonType='is-secondary is-fluid' buttonText='Sign Up' onClick={secondaryAction}/>
    </FormWrapper>
)

LoginForm.propTypes = {
    secondaryAction: PropTypes.func
}
export default LoginForm