/* eslint-disable react/no-unknown-property */
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stats, useGLTF} from '@react-three/drei';
import {Suspense} from 'react';
import { Color } from 'three';
import DecalComp from './DecalComp';

const Main = () => {
    const { nodes, materials } = useGLTF('/main.glb')
    const delta = -3
    
    

  return (
    <>
        <Suspense fallback={null}>
            <Canvas
                camera={{position: [25, 19, -30], fov: 25, rotation:[0,0,0], translateZ: 5}} shadows
                className="min-w-[700px]"
            >
                    <directionalLight intensity={2} position={[15, 25 + delta, -30]} castShadow />
                    {/* <spotLight intensity={0.009} position={[-2,3.5 + delta,0]} castShadow color={new Color(125,255,255)} penumbra={0.5} /> */}
                    <pointLight intensity={0.005} position={[-2.33,3.5 + delta,0]} castShadow color={new Color(125,255,255)} distance={17}/>
                    <pointLight intensity={0.01} position={[2.2,5 + delta,0]} color={new Color(125,255,255)} distance={3}/>
                    <pointLight intensity={0.01} position={[2.2,4 + delta,0]} color={new Color(125,255,255)} distance={3}/>
                    <ambientLight intensity={0.2} position={[15, 25 + delta, -30]} />
                    <OrbitControls 
                        enableZoom={false}
                    />
                        <group position={[-4,-7 + delta,0]}>
                        <group dispose={null}>
                            <group position={[9.131, -2.484, -0.332]} rotation={[0, -1.555, 0]} scale={8.436}>
                                <primitive object={nodes.Hips} />
                                <skinnedMesh geometry={nodes.EyeLeft_1.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft_1.skeleton} />
                                <skinnedMesh castShadow geometry={nodes.EyeLeft_2.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.EyeLeft_2.skeleton} />
                                <skinnedMesh geometry={nodes.EyeLeft_3.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.EyeLeft_3.skeleton} />
                                <skinnedMesh geometry={nodes.EyeLeft_4.geometry} material={materials.Wolf3D_Body} skeleton={nodes.EyeLeft_4.skeleton} />
                                <skinnedMesh receiveShadow geometry={nodes.EyeLeft_5.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.EyeLeft_5.skeleton} />
                                <skinnedMesh geometry={nodes.EyeLeft_6.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.EyeLeft_6.skeleton} />
                                <skinnedMesh  castShadow geometry={nodes.EyeLeft_7.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.EyeLeft_7.skeleton} />
                                <skinnedMesh castShadow geometry={nodes.EyeLeft_8.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.EyeLeft_8.skeleton} />
                            </group>
                            <group position={[8.654, 2.874, -0.312]} scale={[0.341, 1.492, 0.341]}>
                                <mesh receiveShadow geometry={nodes.Cylinder.geometry} material={materials.Material5} />
                                <mesh receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.Material6} />
                            </group>
                            <group position={[0.028, 9.528, 0]} scale={[1.665, 1.665, 2.086]}>
                                <mesh castShadow geometry={nodes.Cube.geometry} material={materials.Material2} />
                                    <DecalComp />
                            </group>
                            <mesh castShadow geometry={nodes.Keyboard.geometry} material={materials.Material1} position={[3.076, 7.213, 0]} rotation={[0, 1.571, 0]} scale={1.389} />
                            <mesh receiveShadow geometry={nodes.Table.geometry} material={materials.Material} position={[5.718, 2.456, 6.144]} scale={[0.329, 4.834, 0.329]} />
                            <mesh castShadow geometry={nodes.Mouse.geometry} material={materials.Material1} position={[4.709, 8.216, -3.13]} rotation={[-Math.PI, 1.186, -Math.PI]} scale={0.482} />
                            </group>
                        </group>
                <Stats />
            </Canvas>
        </Suspense>
    </>
  )
}

export default Main
useGLTF.preload('/main.glb')