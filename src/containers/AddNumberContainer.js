import React, { Component } from "react"
import { AddNumber } from "../pages/WithRedux"
import store from "../store"

class AddNumberContainer extends Component {
    render() {
        return (
            <AddNumber onClick={(size) => {
                store.dispatch({ type: "INCREASE", size })
            }} />
        )
    }
}

export default AddNumberContainer