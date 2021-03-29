import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    const id = state.seleted_content_id
    let content = state.contents.find(content => content.id === id)
    return {
        content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUpDateMode: () => dispatch({ type: "CHANGE_UPDATE_MODE" }),
        deleteContent: () => dispatch({ type: "DELETE_CONTENT" })
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.content.title}</h1>
                {this.props.content.desc}
                <div>
                    <Link
                        to={`/webApp/${this.props.content.id}/update`}
                        onClick={this.props.changeUpDateMode}
                    >
                        <button>Update</button>
                    </Link>
                    <Link to="/webApp">
                        <button onClick={this.props.deleteContent}>Delete</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)