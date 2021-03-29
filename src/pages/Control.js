import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch({ type: "CHANGE_CREATE_MODE" })
    }
}

class Control extends Component {
    render() {
        return (
            <div>
                <Link
                    to="/webApp/create"
                    onClick={this.props.onClick}
                >
                    <button>Create</button>
                </Link>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Control)