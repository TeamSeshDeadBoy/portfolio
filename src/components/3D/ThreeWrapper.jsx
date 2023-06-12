/* eslint-disable react/no-unknown-property */
import {Canvas} from '@react-three/fiber';
import { Center, OrbitControls, Stats} from '@react-three/drei';
import { Suspense} from 'react';

// eslint-disable-next-line react/prop-types
const ThreeWrapper = ({children}) => {

  return (
    <>
        <Canvas
            camera={{position: [0,0,20], fov: 25, }}
        >
            
            <Suspense fallback={null}>
                <ambientLight intensity={0.8} position={[-5,-5,-5]}/>
                {/* <Environment preset={"city"}/> */}
                <OrbitControls 
                    enableZoom={false}
                />
                <Center>
                    <group>
                        {children}
                    </group>
                </Center>
            </Suspense>
            <Stats />
        </Canvas>
    </>
  )
}

export default ThreeWrapper