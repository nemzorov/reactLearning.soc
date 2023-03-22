import Links from "./Links/Links";
import style from './Navbar.module.css'

const Navbar = (props) => {


    return (
        <nav className="navbar">
            <ul className={style.list}>
                {
                    props.data.map (dialog => <Links 
                    key={dialog.id} 
                    activeClass={style.active} 
                    href={dialog.url} 
                    name={dialog.name} 
                    className={style.link}/>)
                }
            </ul>
        </nav>
    );
}

export default Navbar;