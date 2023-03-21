import React from "react"
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className={style.wrapp}>
                <div className={style.logo}>
                    <img src="https://i.pinimg.com/originals/94/1d/99/941d99ab7b41cf36ce2e1023f23a7cc2.png" alt="logo" />
                </div>
                <div className={style.name}>Симпсон соц</div>
            </NavLink>
        </div>
    );
}

export default Header;