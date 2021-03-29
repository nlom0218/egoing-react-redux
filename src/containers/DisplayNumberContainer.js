import React, { Component } from 'react'
import { DisplayNumber } from "../pages/WithRedux"
import store from '../store'

class DisplayNumberContainer extends Component {
    state = { number: store.getState().number }
    constructor(props) {
        super(props)
        store.subscribe(() => {
            this.setState({ number: store.getState().number })
        })
    }
    render() {
        return (
            <DisplayNumber number={this.state.number} />
        )
    }
}

export default DisplayNumberContainer