/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Tailwind3d = () => {
    const {nodes, materials} = useGLTF('/tailwind.glb');


  return (
    <>
        <mesh
            rotation={[0, degToRad(90), 0]}
            castShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            dispose={null}
            scale={[1.3,1.5,1.5]}
        >
            
        </mesh>
    </>
  )
}
useGLTF.preload("/tailwind.glb")

export default Tailwind3d