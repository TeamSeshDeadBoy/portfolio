/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Html3d = () => {
    const {nodes, materials} = useGLTF('/html.glb');

  return (
    <group 
        rotation={[0, degToRad(-90), 0]}
        
        rotateX={degToRad(45)}
        scale={[2.5,2.5,2.5]}
        dispose={null}
        castShadow
    >
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_3.geometry}
            material={materials.Material3}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_4.geometry}
            material={materials.Material4}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_2.geometry}
            material={materials.Material2}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_1.geometry}
            material={materials.Material1}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_5.geometry}
            material={materials.Material2}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_6.geometry}
            material={materials.Material5}
        />
        <mesh
            rotation={[degToRad(28), 0, 0]}
            geometry={nodes.Cube_7.geometry}
            material={materials.Material6}
        />
    </group>
  )
}
useGLTF.preload("/html.glb")

export default Html3d