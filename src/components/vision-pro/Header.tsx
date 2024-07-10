import React from 'react';
import logo from '@/img/logo-visionpro.png';

function Header() {
    console.log(logo)
    return (
        <>
            <nav className="absolute top-5 left-0 w-full">
                <img className="max-w-[290px] mx-auto" src={logo.src} alt="Logo apple vision pro"/>
            </nav>
            <span className="hidden">Scroll to discover</span>
        </>
    );
}

export default Header;
