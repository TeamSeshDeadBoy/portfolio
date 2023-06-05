/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';


const React3d = () => {
    const {nodes, materials} = useGLTF('/react.glb');

  return (
    <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.8,0.5,0.8]}
        castShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        dispose={null}
    >
        
    </mesh>
  )
}
useGLTF.preload("/react.glb")

export default React3d