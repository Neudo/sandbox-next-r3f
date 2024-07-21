import React, {useRef, useState} from 'react';
import {Environment, RoundedBox, Scroll, ScrollControls, useScroll} from "@react-three/drei";
import { VisionPro } from "@/models/visionPro";
import Header from "@/components/vision-pro/Header";
import TitleSection from "@/components/TitleSection";
import {useFrame} from "@react-three/fiber";
function Experience() {
    const [visionPosition, setVisionPosition] = useState([0, -.7, 0.3])
    const [visionRotation, setVisionRotation] = useState(Math.PI)
    const [rotationMode, setRotationMode] = useState<boolean>(true)
    const startPresentationMode = () => {
        setRotationMode(false)
        setVisionRotation(Math.PI * .85)
    }

    const updateRotationMode = (newRotationMode) => {
        setRotationMode(newRotationMode)
    }
    const updateRotation = (newRotation) => {
        setVisionRotation(newRotation)
    }

    useFrame((state, delta) => {

    })

    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[0, 25, 0]} angle={1.3} castShadow intensity={2} penumbra={1} shadow-bias={-0.0001}/>
            <Environment preset="apartment" background={false} />
            <ScrollControls enabled={true} pages={6} damping={0.1} maxSpeed={.2} >
                {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                <VisionPro
                    updateRotationMode={updateRotationMode}
                    updateRotation={updateRotation}
                    rotationMode={rotationMode}
                    scale={20}
                    rotation-y={visionRotation}
                    position={visionPosition}
                />
                <Header/>
                <Scroll html style={{ width: '100%', padding: '0 25px' }}>
                    {/* DOM contents in here will scroll along */}
                    <section className="w-full relative h-[500vh] top-0">
                        <TitleSection/>
                    </section>
                    <section className="h-[100vh]  relative">
                        <button style={{
                            bottom: '50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            position: 'absolute'
                        }}
                                onClick={startPresentationMode}
                        >Take a closer look
                        </button>
                    </section>
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default Experience;
