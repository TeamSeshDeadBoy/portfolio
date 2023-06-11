// import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';


const DecalComp = () => {
   const texture = useTexture("src/assets/texture.jpg")
   const { nodes, materials } = useGLTF('/main.glb')


  return (
    // eslint-disable-next-line react/no-unknown-property
    
    <mesh castShadow geometry={nodes.Cube_1.geometry} material={materials.Material3} >
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[3,0.1,0.1]}
            map={texture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
    </mesh>
  )
}

export default DecalComp