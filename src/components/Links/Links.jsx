import React from "react";

const Links = (props) => {
    return (
        <li className={props.className}>
            <a href={props.href}>{props.name}</a>
        </li>
    )
}

export default Links;