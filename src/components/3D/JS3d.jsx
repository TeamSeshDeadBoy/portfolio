/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Js3d = () => {
    const {nodes, materials} = useGLTF('/js1.glb');

  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Material}
            dispose={null}
            scale={[0.5,3,3]}
        >
            
        </mesh>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.Material1}
            dispose={null}
            scale={[0.5,3,3]}
            material-roughness={1}
        >
            
        </mesh>
    </>
  )
}
useGLTF.preload("/js1.glb")

export default Js3d