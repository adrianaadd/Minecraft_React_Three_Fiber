import { Canvas } from '@react-three/fiber'
import './App.css'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import FPV from './components/FPV'
import { Player } from './img/player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'
import { Dino } from './assets/Dinosaur/tyrannosaurus_rex/Dino.jsx'

function App() {

  return (
    <>
      <TextureSelector />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.9} />
        <FPV />
        <Dino></Dino>
        <Dino></Dino>
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
