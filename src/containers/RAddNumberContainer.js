import { connect } from "react-redux"
import { AddNumber } from "../pages/WithRedux"

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (size) => { dispatch({ type: "INCREASE", size }) }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber)

// import React, { Component } from "react"
// import store from "../store"

// class AddNumberContainer extends Component {
//     render() {
//         return (
//             <AddNumber onClick={(size) => {
//                 store.dispatch({ type: "INCREASE", size })
//             }} />
//         )
//     }
// }

// export default AddNumberContainer