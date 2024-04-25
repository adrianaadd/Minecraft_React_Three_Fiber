import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useState } from "react";

export function Objeto3d(props) {
  // const texture = useTexture("/textures/wawa.png");
  const { nodes, materials } = useGLTF("src/assets/tyrannosaurus_rex.glb");

  const [pos, setPos] = useState([0, 1.8, 1]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Arc001_1.geometry}
        material={materials["01___Default-2"]}
      />
      <mesh
        geometry={nodes.Arc001_1_1.geometry}
        material={materials["02___Default-2"]}
      />
      <mesh
        geometry={nodes.Arc001_1_2.geometry}
        material={materials["02___Default"]}
      />
      <mesh
        geometry={nodes.Arc001_1_3.geometry}
        material={materials["01___Default"]}
      />
      <mesh geometry={nodes.Arc001_1_4.geometry}>
       material = {materials.printable}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/mug.glb");
