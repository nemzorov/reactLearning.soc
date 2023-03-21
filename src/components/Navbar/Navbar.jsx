import Links from "../Links/Links";
import style from './Navbar.module.css'

const linkData = [
    {url: '/profile', name: 'Моя страница', id:1},
    {url: '/message', name: 'Сообщения', id: 2},
    {url: '/news', name: 'Новости', id: 3},
    {url: '/music', name: 'Музыка', id: 4},
    {url: '/settings', name: 'Настройки', id: 5},
]

const links = linkData.map(dialog => 
    <Links key={dialog.id} activeClass={style.active} href={dialog.url} name={dialog.name} className={style.link}/>
)


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className={style.list}>
                {links}
            </ul>
        </nav>
    );
}

export default Navbar;