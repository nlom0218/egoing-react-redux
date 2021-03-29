import React, { Component } from "react"
import AddNumberContainer from "../containers/AddNumberContainer"
import DisplayNumberContainer from "../containers/DisplayNumberContainer"

import "./noRedux.css"

class AddNumberRoot extends Component {
    render() {
        return (
            <div className="border">
                <h3>Add Number Root</h3>
                <AddNumberContainer />
            </div>
        )
    }
}

export class AddNumber extends Component {
    state = { size: 1 }
    render() {
        return (
            <div className="border">
                <h3>Add Number</h3>
                <input type="button" value="+" onClick={() => {
                    this.props.onClick(parseInt(this.state.size))
                }}></input>
                <input type="text" value={this.state.size} onChange={(e) => {
                    this.setState({ size: e.target.value })
                }}></input>
            </div>
        )
    }
}

class DisplayNumberRoot extends Component {
    render() {
        return (
            <div className="border">
                <h3>Dispaly Number Root</h3>
                <DisplayNumberContainer />
            </div>
        )
    }
}

export class DisplayNumber extends Component {
    render() {
        return (
            <div className="border">
                <h3>Dispaly Number</h3>
                <input type="text" value={this.props.number} readOnly></input>
            </div >
        )
    }
}

export class WithRedux extends Component {
    state = { num: 5 }
    render() {
        return (
            <div className="border" >
                <h3>Root</h3>
                <AddNumberRoot />
                <DisplayNumberRoot />
            </div>
        )
    }
}