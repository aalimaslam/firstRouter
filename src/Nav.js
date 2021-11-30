import React from 'react'
import {Link} from "react-router-dom"
import "./nav.css"

export default function Nav(props) {
    return (
        <div className='navigation'>
            <div className="logo">{props.title}</div>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </div>
    )
}
