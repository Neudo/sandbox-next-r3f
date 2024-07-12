import React, { useEffect, useRef } from 'react';
import logo from '@/img/logo-visionpro.png';
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Header() {
    const scroll = useScroll();
    const bounceTextRef = useRef(null);
    const logoRef = useRef(null);

    useFrame((state, delta) => {
        if (scroll.offset >= 0.004) {
            bounceTextRef.current.classList.add('invisible');
        } else {
            bounceTextRef.current.classList.remove('invisible');
        }

        if(scroll.offset <= 0.016) {
            logoRef.current.classList.add('invisible');
        } else {
            logoRef.current.classList.remove('invisible');
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            handleBounce();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    function handleBounce() {
        if (bounceTextRef.current) {
            bounceTextRef.current.classList.add('bounced');
        }
    }

    return (
        <nav className="absolute top-5 left-0 w-full h-[90vh] flex justify-between flex-col">
            <img ref={logoRef} className="max-w-[290px] transition-all duration-700  relative top-1/2 mx-auto" src={logo.src} alt="Logo apple vision pro" />
            <div ref={bounceTextRef} className="bounce-text mx-auto transition-all duration-700 p-2 bg-blue-500 text-white rounded-lg w-fit text-xs">
                Scroll to discover
            </div>
        </nav>
    );
}

export default Header;
