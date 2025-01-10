import React from 'react';
import './styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>ARJUN NAIDU</h1>
            <nav>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT ME</a>
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECT</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;