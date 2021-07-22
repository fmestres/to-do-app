import { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/sass/navbar.sass'
import logo from '../logo.svg'
import Button from './common/button'
import Modal from './common/modal'
import UserAccessForms from './user-access-forms'


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
                {this.state.isFormModalActive ?
                (
                <Modal onClose={this.toggleFormModal}>
                    <UserAccessForms />
                </Modal>
                ):
                null}

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