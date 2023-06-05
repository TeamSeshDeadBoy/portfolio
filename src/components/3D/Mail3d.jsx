/* eslint-disable react/no-unknown-property */
import { useGLTF} from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';


const Mail3d = () => {
    const {nodes, materials} = useGLTF('/Mail.glb');

  return (
    <>
        <mesh
            rotation={[degToRad(-90), 0, degToRad(180)]}
            castShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Material}
            dispose={null}
            scale={[1.5,1.5,1.5]}
        />
    </>
  )
}
useGLTF.preload("/Mail.glb")

export default Mail3d