import React from 'react';
import logo from '@/img/logo-visionpro.png';
import gsap from 'gsap';

function Header() {

    const tl = gsap.timeline();

    tl.to('.bg-blue-500', {duration: 1,
        y: 80,
        repeat: -1,
        yoyo: true,
        ease: 'bounce.easeOut'
    })


    return (
        <>
            <nav className="absolute top-5 left-0 w-full h-[90vh] flex justify-between flex-col">
                <img className="max-w-[290px] mx-auto" src={logo.src} alt="Logo apple vision pro"/>
                <div className="mx-auto p-2 bg-blue-500 text-white rounded-lg w-fit text-xs ">Scroll to discover</div>
            </nav>
        </>
    );
}

export default Header;
