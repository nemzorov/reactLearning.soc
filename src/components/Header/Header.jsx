import React from "react"
import style from './Header.module.css'

const Header = () => {
    return (
        <div className="header">
            <div className={style.wrapp}>
                <div className={style.logo}>
                    <img src="https://i.pinimg.com/originals/94/1d/99/941d99ab7b41cf36ce2e1023f23a7cc2.png" alt="logo" />
                </div>
                <div className={style.name}>Homer</div>
            </div>
        </div>
    );
}

export default Header;