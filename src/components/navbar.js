import { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/sass/navbar.sass'
import logo from '../logo.svg'
import Button from './common/button'
import Modal from './common/modal'
import Input from './common/input'
import LoginForm from './login-form'

class Navbar extends Component {

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        isFormModalActive: PropTypes.bool
    }

    static defaultProps = {
        isLoggedIn: false,
        isFormModalActive: false
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            isFormModalActive: false
        }

        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.toggleFormModal = this.toggleFormModal.bind(this)
    }

    logIn() {
        this.setState({isLoggedIn: true})
        this.setState({isFormModalActive: false}) //when logged in, modal automatically closes
    }

    logOut() {
        this.setState({isLoggedIn: false})
    }

    toggleFormModal() {
        this.setState({isFormModalActive: !this.state.isFormModalActive})
    }


    render() {
        return (
            <nav className='navbar'>
                <Modal onClose={this.toggleFormModal} isActive={this.state.isFormModalActive}>
                    Hola me llamo fran y estoy probando el modal de la pagina que estoy haciendo porque no tengo ganas de estudiar
                    {this.state.isFormModalActive}
                    <LoginForm />
                </Modal>
                <div className='navbar-left'>
                    <div className='logo-container'>
                        <img className='logo' src={logo} alt='Brand Name' width="60px" height="60px"></img>
                    </div>
                </div>

                <div className='navbar-right'>
                    <Button onClick={this.toggleFormModal} buttonType='is-primary' buttonText='Log in'/>
                </div>
            </nav>
        )
    }


}

export default Navbar