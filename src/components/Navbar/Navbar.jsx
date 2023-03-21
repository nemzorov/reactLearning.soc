import React from "react";
import Links from "../Links/Links";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className={style.list}>
                <Links href="/" name="Моя страница" className={style.link}/>
                <Links href="/message" name="Сообщения" className={style.link}/>
                <Links href="/news" name="Новости" className={style.link}/>
                <Links href="/music" name="Музыка" className={style.link}/>
                <Links href="/settings" name="Настройки" className={style.link}/>
            </ul>
        </nav>
    );
}

export default Navbar;