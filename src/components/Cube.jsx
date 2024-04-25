import { useBox } from "@react-three/cannon";
import * as textures from "../img/texture.js";
import { useState } from "react";
import { useStore } from "../hooks/useStore.js";

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube] = useStore((state) => [state.removeCube]);

  const [ref, api] = useBox(() => ({
    type: "Static", //Dynamic
    position,
    mass: 1,
  }));

  const activeTexture = textures[texture + "Texture"];

  const [addCube] = useStore((state) => [state.addCube]);


  const handleAddCube = (event) => {
    event.stopPropagation();
    if (isHovered) {
      const clickedFace = Math.floor(event.faceIndex / 2);
      const { x, y, z } = ref.current.position;
      if (clickedFace === 0) {
        addCube(x + 1, y, z);
      } else if (clickedFace === 1) {
        addCube(x - 1, y, z);
      } else if (clickedFace === 2) {
        addCube(x, y + 1, z);
      } else if (clickedFace === 3) {
        addCube(x, y - 1, z);
      } else if (clickedFace === 4) {
        addCube(x, y, z + 1);
      } else if (clickedFace === 5) {
        addCube(x, y, z - 1);
      }
    }
  };

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        } else if (e.ctrlKey) {
          api.velocity.set(0, 2, 0);
        } else {
          handleAddCube(e);
        }
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
    >
      <boxGeometry attach="geometry"></boxGeometry>
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        attach="material"
        map={activeTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};
