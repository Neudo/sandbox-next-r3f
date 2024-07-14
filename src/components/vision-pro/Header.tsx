import React, { useEffect, useRef } from 'react';
import logo from '@/img/logo-visionpro.png';
import {Html, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Header() {
    const scroll = useScroll();
    const bounceTextRef = useRef(null);
    const logoRef = useRef(null);
    const logoHeaderRef = useRef(null);

    useFrame((state, delta) => {
        if(!bounceTextRef.current) return;
        if (scroll.offset >= 0.004) {
            bounceTextRef.current.classList.add('invisible');
        } else {
            if(bounceTextRef.current.classList.contains('invisible')){
                bounceTextRef.current.classList.remove('invisible');
            }
        }

        if(scroll.offset >= .15) {
            if(logoHeaderRef.current.classList.contains('invisibleHeader')) {
                logoHeaderRef.current.classList.remove('invisibleHeader');
            }
        } else {
            if(logoRef.current.classList.contains('invisibleHeader')) {
            }
            logoHeaderRef.current.classList.add('invisibleHeader');
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            bounceTextRef.current.classList.add('bounced');
        }, 5000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <>
            <Html ref={logoRef} fullscreen wrapperClass="centerLogo">
                <img className="max-w-[290px] transition-all duration-700  relative top-1/2 mx-auto" src={logo.src}
                     alt="Logo apple vision pro"/>
            </Html>
            <Html fullscreen wrapperClass="headerHtml">
                <nav className="absolute top-0 left-0 w-full h-[90vh] flex justify-between flex-col">
                   <div ref={logoHeaderRef} className="w-full pt-4 pb-6 backdrop-blur-sm bg-white/30 relative duration-700 top-0"> <img  className="max-w-[190px] transition-all duration-700  relative top-1 mx-auto" src={logo.src} alt="Logo apple vision pro"/></div>
                    <div
                        ref={bounceTextRef}
                        className="bounce-text mx-auto transition-all duration-700 p-2 bg-blue-500 text-white rounded-lg w-fit text-xs">
                        Scroll to discover
                    </div>
                </nav>
            </Html>
        </>
    );
}

export default Header;
