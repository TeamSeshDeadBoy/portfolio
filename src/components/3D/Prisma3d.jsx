/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Prisma3d = () => {
    const {nodes, materials} = useGLTF('/prisma.glb');


  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            dispose={null}
            scale={[1.5,1.5,1.5]}
            position={[0,0,0]}
        >
            
        </mesh>
    </>
  )
}

// useGLTF.preload("/prisma.glb")

export default Prisma3d