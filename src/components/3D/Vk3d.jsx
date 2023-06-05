/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Vk3d = () => {
    const {nodes, materials} = useGLTF('/Vk.glb');

  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            dispose={null}
            scale={[0.2,1,1]}
        />
    </>
  )
}
useGLTF.preload("/Vk.glb")

export default Vk3d