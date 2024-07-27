'use client'
import React from 'react';
import {Canvas} from "@react-three/fiber";
import Experience from "@/components/Experience";
import ExperienceCamera from "@/components/ExperienceCamera";

function Page() {
    return (
        <Canvas
            style={{height: '100vh', width: '100vw'}}
            shadows
            camera={{position: [-2, 0, 9]}}
        >
            <ExperienceCamera/>
        </Canvas>
    );
}

export default Page;
