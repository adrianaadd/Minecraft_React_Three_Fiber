

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dino(props) {
  const { nodes, materials } = useGLTF(
    "src/assets/Dinosaur/tyrannosaurus_rex/dino.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
       position={[-6, -0.3, 15]} geometry={nodes.Object_4.geometry} material={materials.Tyrannosaurus93} rotation={[Math.PI / 2, 1.2, 4.7]} />
    </group>
  )
}

useGLTF.preload("src/assets/Dinosaur/tyrannosaurus_rex/dino.gltf");
