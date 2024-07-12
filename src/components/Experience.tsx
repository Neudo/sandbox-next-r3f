import React from 'react';
import {Environment, Scroll, ScrollControls} from "@react-three/drei";
import { VisionPro } from "@/models/visionPro";
import Header from "@/components/vision-pro/Header";
import { useControls } from 'leva'


function Experience() {
    const {position } = useControls({
        position: {
            value: {x: 0, y: 0, z: 3.3},
            step: 0.1,

        }
    })

    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[0, 25, 0]} angle={1.3} castShadow intensity={2} penumbra={1} shadow-bias={-0.0001}/>
            <Environment preset="apartment" background={false} />
            <ScrollControls pages={5} damping={0.1} maxSpeed={.2} >

                <Scroll html style={{ width: '100%', padding: '0 25px' }}>
                    {/* DOM contents in here will scroll along */}
                    <Header />
                    <section className="w-full">
                        <h1 className="top-[100vh]">Welcome to the era of spatial computing.</h1>
                        <h1 style={{top: '170vh'}}>Apple Vision Pro seamlessly blends digital content with your physical
                            space.</h1>
                        <h1 style={{top: '220vh'}}>You navigate simply by using your eyes, hands, and voice.</h1>
                        <h1 style={{top: '320vh'}}>So you can do the things you love in ways never before possible.</h1>
                        <h1 style={{top: '400vh'}}>You’ve never seen everything like this before.</h1>
                        <button style={{top: '450vh', position: 'relative'}}>Take a closer look</button>
                    </section>
                </Scroll>
                <VisionPro scale={20} rotation-y={Math.PI} position={[0, 0, 0.3]} />
            </ScrollControls>
        </>
    );
}

export default Experience;
