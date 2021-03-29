import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const id = state.seleted_content_id
    let content = state.contents.find(content => content.id === id)
    return {
        content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (upDateTitle, upDateDesc) => dispatch({ type: "UPDATE", upDateTitle, upDateDesc })
    }
}

class Update extends Component {
    state = {
        title: this.props.content.title,
        desc: this.props.content.desc
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
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            value={this.state.desc}
                            onChange={this.onChange}>
                        </textarea>
                    </p>
                    <p>
                        <input
                            type="submit"
                            value="Update"
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

export default connect(mapStateToProps, mapDispatchToProps)(Update);