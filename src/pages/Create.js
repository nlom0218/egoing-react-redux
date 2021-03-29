import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (title, desc) => dispatch({ type: "CREATE", title, desc, id: Date.now() })
    }
}

class Create extends Component {
    state = {
        title: "",
        desc: ""
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="desc"
                            value={this.state.desc}
                            onChange={this.onChange}>
                        </textarea>
                    </p>
                    <p>
                        <input
                            type="submit"
                            value="Create"
                            onClick={(e) => {
                                e.preventDefault()
                                this.props.onClick(this.state.title, this.state.desc)
                            }}
                        />
                    </p>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Create);