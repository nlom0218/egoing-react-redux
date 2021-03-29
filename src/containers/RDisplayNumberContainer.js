import { connect } from "react-redux"
import { DisplayNumber } from "../pages/WithRedux"

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}


export default connect(mapStateToProps)(DisplayNumber)


// import React, { Component } from 'react'
// import store from '../store'

// class DisplayNumberContainer extends Component {
//     state = { number: store.getState().number }
//     constructor(props) {
//         super(props)
//         store.subscribe(() => {
//             this.setState({ number: store.getState().number })
//         })
//     }
//     render() {
//         return (
//             <DisplayNumber number={this.state.number} />
//         )
//     }
// }

// export default DisplayNumberContainer