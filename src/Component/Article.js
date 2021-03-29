import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom"
import Content from '../pages/Content';
import Control from '../pages/Control';
import Create from '../pages/Create';
import Update from '../pages/Update';

const mapStateToProps = (state) => {
    const length = state.contents.length
    const newContent = state.contents[length - 1]
    return {
        content: state.welcome_content,
        UpDateMode: state.upDateMode,
        CreateMode: state.createMode,
        id: state.selected_content_id,
        newContent
    }
}

class Article extends Component {
    render() {
        return (
            <article>
                <Control />
                <Switch>
                    <Route exact path="/webApp">
                        <h1>{this.props.content.title}</h1>
                        {this.props.content.desc}
                    </Route>
                    <Route path="/webApp/create">
                        {this.props.CreateMode ? <Create /> : <Redirect to={`/webApp/${this.props.newContent.id}`} />}
                    </Route>
                    <Route exact path="/webApp/:id"><Content /></Route>
                    <Route path="/webApp/:id/update">
                        {this.props.UpDateMode ? <Update /> : <Redirect to={`/webApp/${this.props.id}`} />}
                    </Route>
                </Switch>
            </article>
        );
    }
}

export default connect(mapStateToProps)(Article)