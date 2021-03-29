import React, { Component } from "react"

import "./noRedux.css"

class AddNumberRoot extends Component {
    render() {
        return (
            <div className="border">
                <h3>Add Number Root</h3>
                <AddNumber onClick={(size) => {
                    this.props.onClick(size)
                }} />
            </div>
        )
    }
}

class AddNumber extends Component {
    state = { size: 1 }
    render() {
        return (
            <div className="border">
                <h3>Add Number</h3>
                <input type="button" value="+" onClick={(e) => {
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
                <DisplayNumber number={this.props.number} />
            </div>
        )
    }
}

class DisplayNumber extends Component {
    render() {
        return (
            <div className="border">
                <h3>Dispaly Number</h3>
                <input type="text" value={this.props.number} readOnly></input>
            </div>
        )
    }
}

export class NoRedux extends Component {
    state = { num: 0 }
    render() {
        return (
            <div className="border" >
                <h3>Root</h3>
                <AddNumberRoot onClick={(size) => {
                    this.setState({ num: this.state.num + size })
                }} />
                <DisplayNumberRoot number={this.state.num} />
            </div>
        )
    }
}