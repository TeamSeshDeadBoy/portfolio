/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Tg3d = () => {
    const {nodes, materials} = useGLTF('/tg.glb');
    materials.Material.wireframe = false;

  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            dispose={null}
            scale={[1,1,1]}
        />
    </>
  )
}
useGLTF.preload("/tg.glb")

export default Tg3d