import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import Header from "@/components/vision-pro/Header";

function TitleSection(props) {
    const scroll = useScroll()

    const titleRef = useRef<HTMLHeadingElement>(null!)

    const handleVisibility = () => {
        if (scroll.offset >= 0.07073) {
            titleRef.current.classList.add('visible')
        } else {
            titleRef.current.classList.remove('visible')
        }
    }
    useFrame((state, delta) => {
        handleVisibility()
    })

return (
    <div>
        <h1 ref={titleRef} className="top-[105vh] left">Welcome to the era of spatial computing.</h1>
        <h1 className="" style={{top: '190vh'}}>Apple Vision Pro seamlessly blends digital content with your physical
            space.</h1>
        <h1 className="right" style={{top: '290vh'}}>You navigate simply by using your eyes, hands, and voice.</h1>
        <h1 style={{top: '390vh'}}>So you can do the things you love in ways never before possible.</h1>
        <h1 style={{top: '490vh'}}>You’ve never seen everything like this before.</h1>
    </div>
);
}

export default TitleSection;
