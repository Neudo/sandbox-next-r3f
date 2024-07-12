'use client'
import React from 'react';
import {Canvas} from "@react-three/fiber";
import Experience from "@/components/Experience";

function Page() {
    return (
        <Canvas
            style={{height: '100vh', width: '100vw'}}
            shadows
            camera={{position: [-2, 0, 9]}}
        >
            <Experience/>
        </Canvas>
    );
}

export default Page;
