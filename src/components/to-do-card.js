import { Component } from "react"
import PropTypes from 'prop-types'

class ToDoCard extends Component {

    static propTypes = {
        isActive: PropTypes.bool,
        isFinished: PropTypes.bool,
        onDelete: PropTypes.func
    }

    constructor() {}
}

export default ToDoCard