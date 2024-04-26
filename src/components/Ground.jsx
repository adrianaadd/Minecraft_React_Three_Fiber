import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../img/texture";
import { useStore } from "../hooks/useStore";

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  const handleAddCube = (event) => {
    event.stopPropagation();
    const [x, y, z] = Object.values(event.point).map((n) => Math.ceil(n));
    addCube(x, y, z);
  };

  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref} onClick={handleAddCube}>
      <planeGeometry attach="geometry" args={[100, 100]} />{" "}
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
