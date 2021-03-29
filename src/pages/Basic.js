import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import { NoRedux } from "./NoRedux"
import { WithRedux } from "./WithRedux"
import { ReactRedux } from "./ReactRedux"

export function Basic() {
    return (
        <div>
            <h1>Basic Of React Redux</h1>
            <ul>
                <li><Link to="/basic/noRedux">Redux없는 React컴포넌트</Link></li>
                <li><Link to="/basic/Redux">Redux와 함께 만드는 React컴포넌트</Link></li>
                <li><Link to="/basic/React-Redux">React-Redux와 함께 만드는 React컴포넌트</Link></li>
            </ul>
            <Switch>
                <Route path="/basic/noRedux"><NoRedux /></Route>
                <Route path="/basic/Redux"><WithRedux /></Route>
                <Route path="/basic/React-Redux"><ReactRedux /></Route>
            </Switch>
        </div>
    )
}