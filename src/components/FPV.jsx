import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

function FPV() {
    const { camera, gl } = useThree()
    


  return (
      <PointerLockControls args={[camera,gl.domElement]}>
          
   </PointerLockControls>
  )
}

export default FPV
