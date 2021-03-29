import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

const mapStateToProps = (state) => {
    return {
        contents: state.contents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch({ type: "CONTENT", id })
    }
}

class Nav extends Component {
    render() {
        return (
            <nav>
                <ol>
                    {this.props.contents.map(content => {
                        return (
                            <li key={content.id}>
                                <Link to={`/webApp/${content.id}`} onClick={() => this.props.onClick(content.id)}>
                                    {content.title}
                                </Link>
                            </li>)
                    })}
                </ol>
            </nav >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)