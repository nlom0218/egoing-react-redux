import React, { Component } from "react"
import RAddNumberContainer from "../containers/RAddNumberContainer"
import RDisplayNumberContainer from "../containers/RDisplayNumberContainer"

import "./noRedux.css"

class AddNumberRoot extends Component {
    render() {
        return (
            <div className="border">
                <h3>Add Number Root</h3>
                <RAddNumberContainer />
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
                <RDisplayNumberContainer unit="kg" />
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

export class ReactRedux extends Component {
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