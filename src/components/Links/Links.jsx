import React from "react";
import { NavLink } from "react-router-dom";

const Links = (props) => {
    return (
        <li className={props.className}>
            <NavLink to={props.href}>{props.name}</NavLink>
        </li>
    )
}

export default Links;