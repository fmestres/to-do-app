import { Component } from "react"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"

class UserAccessForms extends Component {
    
    constructor(props) {
        super(props)
        this.state = {alreadyHasAccount: true}
        this.switchForm = this.switchForm.bind(this)
    }

    componentWillUnmount() {
        return this.setState({alreadyHasAccount: true}) //by default, it always sends you to login form. When unmounted, state is reset
    }

    switchForm() {
        return this.setState(state => ({alreadyHasAccount: !state.alreadyHasAccount}))
    }

    render() {
        return (
            <>
                {this.state.alreadyHasAccount ? <LoginForm secondaryAction={this.switchForm}/> : <SignupForm secondaryAction={this.switchForm}/>}
            </>
        )
    }
}

export default UserAccessForms