/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/main.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/main.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[9.131, -2.484, -0.332]} rotation={[0, -1.555, 0]} scale={8.436}>
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={nodes.EyeLeft_1.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft_1.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_2.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.EyeLeft_2.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_3.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.EyeLeft_3.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_4.geometry} material={materials.Wolf3D_Body} skeleton={nodes.EyeLeft_4.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_5.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.EyeLeft_5.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_6.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.EyeLeft_6.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_7.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.EyeLeft_7.skeleton} />
        <skinnedMesh geometry={nodes.EyeLeft_8.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.EyeLeft_8.skeleton} />
      </group>
      <group position={[8.654, 2.874, -0.312]} scale={[0.341, 1.492, 0.341]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Material5} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Material6} />
      </group>
      <group position={[0.028, 9.528, 0]} scale={[1.665, 1.665, 2.086]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Material2} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material3} />
      </group>
      <mesh geometry={nodes.Keyboard.geometry} material={materials.Material1} position={[3.076, 7.213, 0]} rotation={[0, 1.571, 0]} scale={1.389} />
      <mesh geometry={nodes.Table.geometry} material={materials.Material} position={[5.718, 2.456, 6.144]} scale={[0.329, 4.834, 0.329]} />
      <mesh geometry={nodes.Mouse.geometry} material={materials.Material1} position={[4.709, 8.216, -3.13]} rotation={[-Math.PI, 1.186, -Math.PI]} scale={0.482} />
    </group>
  )
}

useGLTF.preload('/main.glb')
