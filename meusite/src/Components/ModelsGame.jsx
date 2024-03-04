import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Beholder from "../Models3D/Beholder/Beholder";
import Lobsomem from "../Models3D/Lobsomem/Lobsomem";
import rato from "../Models3D/Rato2.glb";
import pilar from "../Models3D/PilarPedestal.glb";
import greatSword from "../Models3D/EspadaGrande.glb";
import Apodrecido from "../Models3D/Apodrecido/Apodrecido";
import Pilar2 from "../Models3D/Pilar/Pilar2";
import Personagem from "../Models3D/Personagem/Personagem";

export function ApodrecidoModel(props) {
  return Apodrecido(props);
}

export function BeholderModel(props) {
  return Beholder(props);
}

export function LobModel(props) {
  return Lobsomem(props);
}

export function Pilar2Model(props) {
  return Pilar2(props);
}

export function PersonagemModel(props) {
  return Personagem(props);
}

export function MouseModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(rato);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Parado.play();
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 3.5, 0]}>
      <primitive object={nodes.Bone} />
      <skinnedMesh
        receiveShadow
        castShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        skeleton={nodes.Cube.skeleton}
      />
    </group>
  );
}

useGLTF.preload(rato);

export function PilarModel(props) {
  const group = useRef();
  const [active] = useState(false);
  const { nodes, materials } = useGLTF(pilar);
  return (
    <group ref={group} {...props} dispose={null} scale={active ? 2 : 6}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload(pilar);

export function GreatSwordModel(props) {
  const group = useRef();
  const [active] = useState(false);
  const { nodes, materials } = useGLTF(greatSword);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={active ? 1 : 0.4}
      rotation={[-0.2, 3.5, 2.7]}
    >
      <mesh
        geometry={nodes.EspadaoAbsurdo.geometry}
        material={materials["Material.006"]}
        receiveShadow
        castShadow
      />
    </group>
  );
}

useGLTF.preload(greatSword);
