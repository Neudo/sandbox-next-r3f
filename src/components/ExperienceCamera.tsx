import * as THREE from 'three'
import React, {useState} from 'react';
import {CameraControls, Environment, Html} from "@react-three/drei";
import { useThree} from "@react-three/fiber";
import {VisionProCamera} from "@/models/visionProCamera";

function ExperienceCamera() {
    const [visionPosition, setVisionPosition] = useState([0, -.7, 0.3])
    let  [visionRotation, setVisionRotation] = useState(Math.PI)
    const [rotationMode, setRotationMode] = useState<boolean>(true)

    const cameraControlsRef = React.useRef<CameraControls>(null!)
    const { camera } = useThree()
    const minDistance = 1
    const enabled = true
    const verticalDragToForward = false
    const dollyToCursor = false
    const infinityDolly = false
    const { DEG2RAD } = THREE.MathUtils


    const rotate20 = () => {
        console.log(cameraControlsRef.current)
        cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true)
    }

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
            <Environment preset="apartment" background={false}/>
            <VisionProCamera
                rotationMode={rotationMode}
                scale={20}
                rotation-y={visionRotation}
                position={visionPosition}
            />
            <Html>
                <ul className="absolute bottom-2 bg-slate-200 w-full rounded-2xl p-6 flex">
                    <li onClick={rotate20}>Btn1</li>
                    <li>Btn2</li>
                    <li>Btn3</li>
                </ul>
            </Html>
        </>
    );
}

export default ExperienceCamera;
