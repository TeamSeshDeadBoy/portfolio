/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Mongo3d = () => {
    const {nodes, materials} = useGLTF('/mongo.glb');


  return (
    <group
        scale={[1,1.7,1.7]}
        dispose={null}
        rotation={[0, degToRad(90), 0]}
    >
        <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Material}
            position={[0,0,0]}
            rotation={[0, 0, degToRad(90)]}
        />
        <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Material1}
            position={[0,0,0]}
            rotation={[0, 0, degToRad(90)]}
        />
        <mesh
            geometry={nodes.Cylinder_3.geometry}
            material={materials.Material2}
            position={[0,0,0]}
            rotation={[0, 0, degToRad(90)]}
        />
    </group>
  )
}
// useGLTF.preload("/mongo.glb")

export default Mongo3d