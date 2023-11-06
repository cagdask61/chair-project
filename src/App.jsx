import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage, MeshReflectorMaterial } from "@react-three/drei";

import Configuration from './components/Configuration';
import useCameraStore from './store/use-camera-store';
import Chair from './components/Chair';
import { useEffect } from 'react';

export default function App() {

  const cameraZoomState = useCameraStore((state) => state.zoom)


  return (
    <div className='w-full h-full'>
      <Configuration />
      <Canvas shadows>
        <color attach={'background'} args={['#303030']} />
        <fog attach={'fog'} args={['#202020', 10, 20]} />
        {/* <OrbitControls /> */}
        <PresentationControls cursor zoom={1.3} speed={1.5}>
          <Stage adjustCamera={cameraZoomState} intensity={20} castShadow={false} shadows={'contact'} environment={"city"} >
            <Chair />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
