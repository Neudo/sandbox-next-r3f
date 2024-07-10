import React, {useRef} from 'react';
import {VisionPro} from "@/models/visionPro";
import {Primitive} from "utility-types";
import {Group} from "three";

function GsapVision() {
    const VisionRotation = -1.8
    const visionRef = useRef<Group>(null!)
    return (
        <div>
            <group ref={visionRef}>
                <VisionPro scale={20} rotation-y={VisionRotation} position={[0, 0, 0]}/>
            </group>
        </div>
    );
}

export default GsapVision;
