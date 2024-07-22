import React, {useState} from 'react';
import {Environment, Scroll, ScrollControls} from "@react-three/drei";
import {VisionPro} from "@/models/visionPro";
import Header from "@/components/vision-pro/Header";
import TitleSection from "@/components/TitleSection";
import {useFrame} from "@react-three/fiber";

function Experience() {
    const [visionPosition, setVisionPosition] = useState([0, -.7, 0.3])
    let  [visionRotation, setVisionRotation] = useState(Math.PI)
    const [rotationMode, setRotationMode] = useState<boolean>(true)
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true)
    const [visionPositionXZ, setVisionPositionXZ] = useState<number>(visionPosition[2])
    const [stopAnimationRotation, setStopAnimationRotation] = useState<boolean>(false)
    const [stopAnimationPosition, setStopAnimationPosition] = useState<boolean>(false)
    const [stopAnimationPositionX, setStopAnimationPositionX] = useState<boolean>(false)
    const [bottom, setBottom] = useState<string>('50px')
    const startPresentationMode = () => {

        setRotationMode(false)
        setStopAnimationPosition(false)
        setStopAnimationRotation(false)
        setStopAnimationPositionX(false)
        setBottom('-150px')

    }

    const updateRotationMode = (newRotationMode) => {
        setRotationMode(newRotationMode)
    }
    const updateRotation = (newRotation) => {
        setVisionRotation(newRotation)
    }
    const updatePosition = (newPosition) => {
        setVisionPosition(newPosition)
    }

    useFrame((state, delta) => {
        if (!rotationMode && !stopAnimationRotation) {
            setVisionRotation(visionRotation -= 0.035)
            if(visionRotation <= Math.PI * 1.43 ){
                setStopAnimationRotation(true)
            }
        }
        if(!rotationMode && !stopAnimationPosition) {
            setVisionPositionXZ(visionPosition.z += 0.08)
            if(visionPosition.z >= 2.90){
                setStopAnimationPosition(true)
            }
        }
        if(!rotationMode && !stopAnimationPositionX){
            setVisionPositionXZ(visionPosition.x -= 0.08)
            if(visionPosition.x <= -.4){
                setStopAnimationPositionX(true)
            }
        }

    })

    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[0, 25, 0]} angle={1.3} castShadow intensity={2} penumbra={1} shadow-bias={-0.0001}/>
            <Environment preset="apartment" background={false} />
            <ScrollControls enabled={scrollEnabled} pages={6} damping={0.1} maxSpeed={.14} >
                {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                <VisionPro
                    updateRotationMode={updateRotationMode}
                    updateRotation={updateRotation}
                    updatePosition={updatePosition}
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
                            bottom: bottom,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            position: 'absolute',
                            transition: 'bottom 0.3s ease-in-out',
                        }}
                                onClick={startPresentationMode}
                        >Take a closer look
                        </button>
                        <ul className="absolute bottom-2 bg-sky-400 w-full rounded-2xl p-6 flex " >
                            <li>Btn1</li>
                            <li>Btn2</li>
                            <li>Btn3</li>
                        </ul>
                    </section>
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default Experience;
