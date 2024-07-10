'use client'
import React, {useRef} from 'react';
import Title from "@/components/title";
import Back from "@/components/Back";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, RoundedBox, Scroll, ScrollControls, Sky, useScroll} from "@react-three/drei";
import {VisionPro} from "@/models/visionPro.jsx";
import { useControls } from 'leva'
import {Group, Mesh} from "three";
import Header from "@/components/vision-pro/Header";
import Overlay from "@/components/Overlay";


function VisionContainer() {
    //debug
    const { VisionRotation } = useControls({
        VisionRotation: -1.8
    })

    const visionRef = useRef<Group>(null!)
    const scroll = useScroll()

    useFrame((state, delta) => {
        const offset = 1 - scroll.offset
        visionRef.current.rotation.y = offset * 1.3

    })
    return (
        <group ref={visionRef}>
            <VisionPro   scale={20} rotation-y={VisionRotation} position={[0, 0, 0]}/>
        </group>
    )
}

function Page() {


    return (
        <div id="root">
            {/*<Back/>*/}
            {/*<Title title={'Scroll anim model'}/>*/}
            {/*<Header/>*/}
            <Canvas
                shadows
                style={{ width: '100vw', height: '100vh' }}
                camera={{position: [0, 0, 9], fov: 90}}
            >
                {/*<OrbitControls enableZoom={false} />*/}
                <ambientLight intensity={1}/>

                <ScrollControls page={5} damping={.1}>
                    {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                    {/*<VisionContainer/>*/}
                    <RoundedBox
                        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                        radius={0.05} // Radius of the rounded corners. Default is 0.05
                        smoothness={4} // The number of curve segments. Default is 4
                    >
                        <meshPhongMaterial color="#f3f3f3" wireframe />
                    </RoundedBox>
                    <Scroll>
                        {/* Canvas contents in here will scroll along */}
                    </Scroll>
                    <Scroll html>
                        {/* DOM contents in here will scroll along */}
                        <h1>html in here (optional)</h1>
                        <h1 style={{top: '100vh'}}>second page</h1>
                        <h1 style={{top: '200vh'}}>third page</h1>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}


export default Page;
