import './header.css';
import imgProfile from './imgHayem.PNG'
import { NavLink} from 'react-router-dom'

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
                <NavLink to="/education">education</NavLink>
                <NavLink to="/portfolio">portfolio</NavLink>
                <NavLink to="/contact">contact</NavLink>
               
            </nav>
        </header>
    );
}

export default Header;
