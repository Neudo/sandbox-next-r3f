import React from 'react';
import {Environment, Scroll, ScrollControls} from "@react-three/drei";
import {VisionPro} from "@/models/visionPro";
import Header from "@/components/vision-pro/Header";

function Experience() {


    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[0, 25, 0]} angle={1.3} castShadow intensity={2} penumbra={1} shadow-bias={-0.0001}/>
            <Environment
                preset="apartment"
                background={false}
            />
            <ScrollControls pages={5} damping={0.1}>
                {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                <VisionPro   scale={20} rotation-y={-1.8} position={[0, 0, 0]}/>
                <Scroll>
                    {/* Canvas contents in here will scroll along */}
                </Scroll>
                <Scroll html style={{width: '100%', padding:'0 25px'}} >
                    {/* DOM contents in here will scroll along */}
                    <Header/>
                    <section>
                        <h1 style={{ top: '100vh' }}>Welcome to the era of spatial computing.</h1>
                        <h1 style={{ top: '200vh' }}>Apple Vision Pro seamlessly blends digital content with your physical space.</h1>
                        <h1 style={{ top: '300vh' }}>You navigate simply by using your eyes, hands, and voice.</h1>
                        <h1 style={{ top: '400vh' }}>So you can do the things you love in ways never before possible.</h1>
                        <h1 style={{ top: '500vh' }}>You’ve never seen everything like this before.</h1>
                    </section>
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default Experience;
