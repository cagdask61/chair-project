import * as THREE from 'three'
import { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import { findTexture } from '../data/textures'
import useTextureStore from "../store/use-texture-store";


const Chair = (props) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf')
  const textureState = useTextureStore()

  const textureProps = useTexture({
    map: './textures/leathers/default/base_color.jpg',
    displacementMap: './textures/leathers/default/height.png',
    normalMap: './textures/leathers/default/normal.jpg',
    roughnessMap: './textures/leathers/default/roughness.jpg',
    aoMap: './textures/leathers/default/ambient_occlusion.jpg',
  })
  // material={materials.chair}

  useEffect(() => {
    const findedTexture = findTexture(textureState.key)

    textureProps.map = findedTexture.map
    textureProps.displacementMap = findedTexture.displacementMap
    textureProps.roughnessMap = findedTexture.roughnessMap
    textureProps.normalMap = findedTexture.normalMap
    textureProps.aoMap = findedTexture.aoMap
  }, [textureState.key]);

  textureProps.map.repeat.set(3, 3);
  textureProps.displacementMap.repeat.set(3, 3);
  textureProps.normalMap.repeat.set(3, 3);
  textureProps.roughnessMap.repeat.set(3, 3);
  textureProps.aoMap.repeat.set(3, 3);

  textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  textureProps.displacementMap.wrapS = textureProps.displacementMap.wrapT = THREE.RepeatWrapping;
  textureProps.normalMap.wrapS = textureProps.normalMap.wrapT = THREE.RepeatWrapping;
  textureProps.roughnessMap.wrapS = textureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  textureProps.aoMap.wrapS = textureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 31.066, 0]}>
            <mesh geometry={nodes.chair_chair_0.geometry} >
              <meshStandardMaterial {...textureProps} />
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