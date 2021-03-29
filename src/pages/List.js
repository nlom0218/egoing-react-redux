import React from "react"
import { Link } from "react-router-dom"

export function List() {
    return (
        <ol>
            <li><Link to="/" replace>Home</Link></li>
            <li><Link to="/basic">Basic</Link></li>
            <li><Link to="/webApp">Web App</Link></li>
        </ol>
    )
}