import React, { Component } from "react"
import PropTypes from 'prop-types'
import Form from "./form"

class FormWrapper extends Component{

    static propTypes = {
        formSchema: PropTypes.object.isRequired,
        submitEndpoint: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]) //children represent additional buttons, forgot pass links, etc.
    }
    
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
        this.updateState = this.updateState.bind(this)
        this.handleFormSubmitted = this.handleFormSubmitted.bind(this)
    }

    getInitialState = () => {
        let fields = {}

        for (const field of this.props.formSchema.fields) {
            fields = {...fields, [field.name]: ''}
        }
        
        return {isSubmitting: false, hasBeenSubmitted: false, fields: fields}
    } //default state. We initially set all input values to an empty string

    componentDidMount() {

        //ping heroku server in order to turn on dyno
    }

    componentDidUpdate() {
        //when submit button is pressed and data has errors
    }

    componentWillUnmount() {
        this.setState(this.getInitialState()) //clear state when components unmounts
    }

    updateState(key, value) {
        return this.setState(state => ({...state, fields: {...state.fields, [key]: value}}))
    }

    handleFormSubmitted() {

        this.setState({isSubmitting: true})
        const formData = this.state.fields
        console.log(formData)
        setTimeout(() => {
            this.setState({isSubmitting: false, hasBeenSubmitted: true})
        }, 4000)

        //API call
    }

    render() {
        return (
            <>
                <h1>{this.props.formSchema.title}</h1>

                <Form fields={this.props.formSchema.fields} 
                submitButton={this.props.formSchema.submitButton} 
                inputValues={this.state.fields} 
                updateState={this.updateState} 
                onSubmit={this.handleFormSubmitted}
                isSubmitting={this.state.isSubmitting}
                hasBeenSubmitted={this.state.hasBeenSubmitted}>
                    
                    {React.cloneElement(this.props.children, { disabled: this.state.isSubmitting || this.state.hasBeenSubmitted })}

                </Form>
            </>
        )
    }

}

export default FormWrapper