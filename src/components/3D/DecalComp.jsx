/* eslint-disable react/no-unknown-property */
import { Decal, useGLTF, useTexture,  } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const DecalComp = () => {
   const texture = useTexture("src/assets/texture.jpg")
   const { nodes, materials } = useGLTF('/main.glb') 
   const ref = useRef()

   const [move, setMove] = useState(0.2)

   // eslint-disable-next-line no-unused-vars
   useScrollPosition(({ prevPos, currPos }) => {
    setMove(currPos.y * 0.0026 + 0.2)
  })


  return (
    // eslint-disable-next-line react/no-unknown-property
    
    <mesh  geometry={nodes.Cube_1.geometry} material={materials.Material3} >
          <Decal 
            position={[-1, move, 0]}
            scale={[1.5,7.375]}
            map={texture}
            ref={ref}
            depthTest={true}
            depthWrite={false}
            />
    </mesh>
  )
}

export default DecalComp