import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

function navBar() {
    return (
        <div className="navBar-container">
            <div className="navBar">
                <NavLink className="nav-link" to="/">Component1</NavLink>
                <NavLink className="nav-link" to="/component1">Component2</NavLink>
                <NavLink className="nav-link" to="/component2">Component3</NavLink>
            </div>
        </div>
    )
}

export default navBar;