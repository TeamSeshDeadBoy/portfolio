/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Three3d = () => {
    const {nodes, materials} = useGLTF('/three.glb');


  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Material1}
            dispose={null}
            scale={[0.7,1.5,1.5]}
        />
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Plane_2.geometry}
            material={materials.Material}
            dispose={null}
            scale={[0.7,1.5,1.5]}
        />
    </>
  )
}
useGLTF.preload("/three.glb")

export default Three3d