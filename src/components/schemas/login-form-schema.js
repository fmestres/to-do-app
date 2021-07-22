const LoginFormSchema = {
    title: 'Login now',
    fields: [
        {
            name: 'username',
            placeholder: 'Username',
            type: 'text',
            required: true
        }, 
        {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
            required: true
        }
    ],
    submitButton: 'Log In'
}

export default LoginFormSchema