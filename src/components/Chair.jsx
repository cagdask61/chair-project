import { useGLTF } from '@react-three/drei'

import useTextureStore from "../store/use-texture-store"
import MaterialTexture from './MaterialTexture'


// material={materials.chair}


const Chair = (props) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf')
  const textureState = useTextureStore()

  //material={materials.chair}
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 31.066, 0]}>
            <mesh geometry={nodes.chair_chair_0.geometry} >
              <MaterialTexture name={textureState.key} />
            </mesh>
            <mesh geometry={nodes.chair_wood_0.geometry} material={materials.wood} />
          </group>
          <mesh geometry={nodes.cushion_cushion_0.geometry} material={materials.cushion} position={[0, -0.176, 3.056]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')

export default Chair;