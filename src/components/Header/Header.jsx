import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className={style.wrapp}>
                <div className={style.logo}>SC</div>
                <div className={style.name}>example </div>
            </NavLink>
        </div>
    );
}

export default Header;