const SignupFormSchema = {
    title: 'Register now',
    fields: [
        {
            name: 'username',
            placeholder: 'Username',

            required: true
        }, 
        {
            name: 'email',
            placeholder: 'Email',

            required: true
        },
        {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
            required: true
        },
        {
            name: 'confirmpassword',
            placeholder: 'Confirm Password',
            type: 'password',
            required: true
        }
    ],
    submitButton: 'Sign Up'
}

export default SignupFormSchema