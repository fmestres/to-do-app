import { Component } from "react"
import PropTypes from 'prop-types'
import Input from "./common/input"
import Button from "./common/button"

import '../assets/sass/form.sass'

class LoginForm extends Component{

    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        isSubmitting: PropTypes.bool,
        hasBeenSubmitted: PropTypes.bool
    }
    
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getInitialState = () => ({username: '', password: '', isSubmitting: false, hasBeenSubmitted: false}) //default state

    componentDidMount() {
        //ping heroku server in order to turn on dyno
    }

    componentWillUpdate() {
        //when submit button is pressed 
    }

    componentWillUnmount() {
        this.setState(this.getInitialState()) //clear state when components unmounts
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({isSubmitting: true})
        const formData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(formData)
    }

    render() {
        return (
            <form className='form'>
                <Input name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                <Input name='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                <Button buttonType='is-primary' buttonText='Log In' onClick={this.handleSubmit} />
            </form>
        )
    }

}

export default LoginForm