/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Personagem.gltf 
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import personagemGltf from './Personagem.gltf'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(personagemGltf)
  const { actions } = useAnimations(animations, group)
  const [active] = useState(false)

  useEffect(() => {
      actions.Idle.play()
  })

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 0, 0]} scale={active ? 1 : 2}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="armadura_Grevas_de_Oricalco" geometry={nodes.armadura_Grevas_de_Oricalco.geometry} material={materials['Material.006']} skeleton={nodes.armadura_Grevas_de_Oricalco.skeleton} />
          <skinnedMesh name="armadura_Manoplas_de_Oricalco" geometry={nodes.armadura_Manoplas_de_Oricalco.geometry} material={materials['Material.007']} skeleton={nodes.armadura_Manoplas_de_Oricalco.skeleton} />
          <skinnedMesh name="armadura_Peitoral_de_Oricalco" geometry={nodes.armadura_Peitoral_de_Oricalco.geometry} material={materials['Material.003']} skeleton={nodes.armadura_Peitoral_de_Oricalco.skeleton}>
            <skinnedMesh name="armadura_Peitoral_de_Oricalco_detalhe" geometry={nodes.armadura_Peitoral_de_Oricalco_detalhe.geometry} material={materials['Material.004']} skeleton={nodes.armadura_Peitoral_de_Oricalco_detalhe.skeleton} />
          </skinnedMesh>
          <skinnedMesh name="armadura_Perneiras_de_Oricalco" geometry={nodes.armadura_Perneiras_de_Oricalco.geometry} material={materials['Material.005']} skeleton={nodes.armadura_Perneiras_de_Oricalco.skeleton} />
          <skinnedMesh name="Cabeca_1" geometry={nodes.Cabeca_1.geometry} material={materials.pele} skeleton={nodes.Cabeca_1.skeleton} />
          <skinnedMesh name="Olhos" geometry={nodes.Olhos.geometry} material={materials['Material.011']} skeleton={nodes.Olhos.skeleton} />
          <skinnedMesh name="PC_Antebracos_Personagem" geometry={nodes.PC_Antebracos_Personagem.geometry} material={materials.pele} skeleton={nodes.PC_Antebracos_Personagem.skeleton} />
          <skinnedMesh name="PC_Bracos" geometry={nodes.PC_Bracos.geometry} material={materials.pele} skeleton={nodes.PC_Bracos.skeleton} />
          <skinnedMesh name="PC_Pescoco" geometry={nodes.PC_Pescoco.geometry} material={materials.pele} skeleton={nodes.PC_Pescoco.skeleton} />
          <skinnedMesh name="Sombrancelha" geometry={nodes.Sombrancelha.geometry} material={materials['Material.010']} skeleton={nodes.Sombrancelha.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(personagemGltf)
