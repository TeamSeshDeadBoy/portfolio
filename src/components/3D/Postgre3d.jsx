/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Postgre3d = () => {
    const {nodes, materials} = useGLTF('/postgre.glb');


  return (
    <group
        scale={[2,2.3,2.3]}
        dispose={null}
        rotation={[0, degToRad(-90), 0]}
    >
        <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Material}
            rotation={[0, 0, degToRad(90)]}
        />
        <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Material1}
            rotation={[0, 0, degToRad(90)]}
        />
        <mesh
            geometry={nodes.Cylinder_3.geometry}
            material={materials.Material2}
            rotation={[0, 0, degToRad(90)]}
        />
    </group>
  )
}

// useGLTF.preload("/postgre.glb")

export default Postgre3d