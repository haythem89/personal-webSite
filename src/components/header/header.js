import './header.css';
import imgProfile from './imgHayem.PNG'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Header extends Component {
    
    clickMenu = () => {
        let menu = document.querySelector('#menu-btn');
        let header = document.querySelector('.header');
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
        // console.log("larghezza", header)
    }
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="user">
                        <img src={imgProfile} alt="immagine profilo" />
                        <h3>Haytem ismail</h3>
                        <p>front-end developer</p>
                    </div>
                    <nav className="navbar">
                        <NavLink to="/home"onClick={this.clickMenu}>home</NavLink>
                        <NavLink to="/about" onClick={this.clickMenu}>about</NavLink>
                        <NavLink to="/education" onClick={this.clickMenu}>education</NavLink>
                        <NavLink to="/portfolio" onClick={this.clickMenu}>portfolio</NavLink>
                        <NavLink to="/contact" onClick={this.clickMenu}>contact</NavLink>
                    </nav>
                </header>
                <button id="menu-btn" className="fas fa-bars" onClick={this.clickMenu}></button>
            </React.Fragment>
        );
    }

}

export default Header;
