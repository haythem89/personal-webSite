import './header.css';
import imgProfile from './imgHayem.PNG'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="user">
                <img src={imgProfile} alt="immagine profilo" />
                <h3>Haytem ismail</h3>
                <p>front-end developer</p>
            </div>
            <nav className="navbar">
                <NavLink to="/home">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <a href="#services">services</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">contact</a>
            </nav>
        </header>
    );
}

export default Header;
