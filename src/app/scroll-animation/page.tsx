'use client'
import React, {useRef} from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import Title from "@/components/title";
import Back from "@/components/Back";
import {ScrollControls, Sky, useScroll} from "@react-three/drei";
import {Mesh} from "three";

function Page() {
    return (
        <div>
            <Back/>
            <Title title={'Scroll Animation'}/>
            <div id="canvas-container">
                <Canvas
                    style={{height: '100vh'}}
                    camera={{position: [0, 0, 5]}}
                >
                    <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
                    <ambientLight intensity={.7}/>
                    <directionalLight position={[0, 0, 5]}/>
                    <ScrollControls page={2}>
                        <Boxes />
                    </ScrollControls>
                </Canvas>
            </div>
        </div>
    );
}

function Boxes() {
    const scroll = useScroll()
    const boxRef= useRef<Mesh>(null!)
    const longBoxRef = useRef<Mesh>(null!)
    const greenBoxRef = useRef<Mesh>(null!)


    useFrame((state, delta) => {
        const offset = 1 - scroll.offset
        boxRef.current.rotation.x = offset
        longBoxRef.current.rotation.y = offset * 3
        greenBoxRef.current.scale.y = offset
        greenBoxRef.current.scale.x = offset
    })

    return (
        <>
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="hotpink"/>
            </mesh>
            <mesh ref={longBoxRef} position={[1, 0, 2]}>
                <boxGeometry args={[1, 2, 1]}/>
                <meshStandardMaterial color="darkblue"/>
            </mesh>
            <mesh ref={greenBoxRef} position={[-2, 0, 1]}>
                <boxGeometry args={[7, 7, 1]}/>
                <meshStandardMaterial color="green"/>
            </mesh>
        </>
    )
        ;
}

export default Page;
