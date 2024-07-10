import React from 'react';
import {Canvas} from "@react-three/fiber";
import GsapVision from "@/components/GsapVision";

function Page(props) {
    return (
        <Canvas>
            <GsapVision/>
        </Canvas>
    );
}

export default Page;
