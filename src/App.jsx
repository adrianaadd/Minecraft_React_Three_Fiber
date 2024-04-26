import { Canvas } from '@react-three/fiber'
import './App.css'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import FPV from './components/FPV'
import { Player } from './components/player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'
import { Dino } from './assets/Dinosaur/tyrannosaurus_rex/Dino.jsx'
import { useStore } from './hooks/useStore.js'




function App() {
  const [save] = useStore((state) => [state.saveWorld])
  const [reset] = useStore((state) => [state.resetWorld])
  return (
    <>
      <button className="save" onClick={save}>
        Save world
      </button>
      <button className="reset" onClick={reset}>
        Reset world
      </button>
      <TextureSelector />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.9} />
        <FPV />
        <Dino />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
    </>
  );
}

export default App
