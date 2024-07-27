import * as THREE from 'three'
import React, {useState} from 'react';
import {CameraControls, Environment, Scroll, ScrollControls} from "@react-three/drei";
import {VisionPro} from "@/models/visionPro";
import Header from "@/components/vision-pro/Header";
import TitleSection from "@/components/TitleSection";
import {useFrame, useThree} from "@react-three/fiber";

function Experience() {
    const [visionPosition, setVisionPosition] = useState([0, -.7, 0.3])
    let  [visionRotation, setVisionRotation] = useState(Math.PI)
    const [rotationMode, setRotationMode] = useState<boolean>(true)
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true)
    const [stopAnimationRotation, setStopAnimationRotation] = useState<boolean>(false)
    const [bottom, setBottom] = useState<string>('50px')
const [enabled, setEnabled] = useState<boolean>(false)
    const cameraControlsRef = React.useRef<CameraControls>(null!)
    const { camera } = useThree()
    const minDistance = 1

    const verticalDragToForward = false
    const dollyToCursor = false
    const infinityDolly = false
    const { DEG2RAD } = THREE.MathUtils

    const startPresentationMode = () => {

        setRotationMode(false)
        setStopAnimationRotation(false)
        setBottom('-150px')
        setEnabled(true)
        cameraControlsRef.current?.setLookAt(0, 0, 6, 0, 0, 0, true)
        setTimeout(() => {
            setEnabled(false)
        }, 3550)
    }

    const rotate20 = () => {
        setEnabled(true)
        console.log(cameraControlsRef.current)
        cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true)
        setTimeout(() => {
            setEnabled(false)
        }, 3550)
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
            if(visionRotation <= Math.PI * 1.50 ){
                setStopAnimationRotation(true)
            }
        }
    })

    return (
        <>
            <CameraControls
                ref={cameraControlsRef}
                minDistance={minDistance}
                enabled={enabled}
                verticalDragToForward={verticalDragToForward}
                dollyToCursor={dollyToCursor}
                infinityDolly={infinityDolly}
            />
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
                        <ul className={`bg-slate-800 absolute gap-2 ${rotationMode ? '-bottom-[50%]' : 'bottom-2'} transition-all ease-out overflow-scroll w-[90vw] left-1/2 -translate-x-1/2 rounded-2xl justify-center p-6 flex whitespace-nowrap`}>
                            <li className="cursor-pointer p-4 rounded-2xl bg-white" onClick={rotate20}>Front</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Cameras and sensors</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Audio Straps</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Head bands</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Displays</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Light Seal</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Digital Crown</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Top button</li>
                            <li className="cursor-pointer p-4 rounded-2xl bg-slate-400 text-slate-100"  >Power</li>
                        </ul>
                    </section>
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default Experience;
