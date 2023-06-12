/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Next3d = () => {
    const {nodes, materials} = useGLTF('/next.glb');
    materials.Material.color.r = 0 
    materials.Material.color.g = 0 
    materials.Material.color.b = 0 
    materials.Material.roughness = 0
    materials.Material.emissiveIntensity = 0


  return (
    <>
        <mesh
            rotation={[0, degToRad(-90), 0]}
            castShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            dispose={null}
            scale={[0.45,0.45,0.45]}
            position={[0,0,0]}
        >
            
        </mesh>
    </>
  )
}
useGLTF.preload("/next.glb")

export default Next3d