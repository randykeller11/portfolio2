/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Gallery.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[220.82, 0, 9.8]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['celling_Material_#718_0'].geometry} material={materials.Material_718} />
          </group>
          <group position={[220.82, 0, 9.8]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['floor_Material_#716_0'].geometry} material={materials.Material_716} />
          </group>
          <group position={[220.82, 0, 9.8]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes['Object001_bonsai-tree_branch1_0'].geometry}
              material={materials['bonsai-tree_branch1']}
            />
          </group>
          <group position={[418.47, 172.32, 9.8]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh geometry={nodes['props_Material_#720_0'].geometry} material={materials.Material_720} />
          </group>
          <group position={[-68.55, 0, 149.95]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['walls_Material_#717_0'].geometry} material={materials.Material_717} />
          </group>
          <group position={[220.82, 0, 9.8]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['walls_exterior_Material_#715_0'].geometry} material={materials.Material_715} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Gallery.glb')
