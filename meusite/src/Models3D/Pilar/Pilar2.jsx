/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Pilar2.gltf 
*/

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import pilarGltf from "./Pilar2.gltf";

export default function Model(props) {
  const [active] = useState(false);
  const { nodes, materials } = useGLTF(pilarGltf);
  return (
    <group {...props} dispose={null} scale={active ? 2 : 6}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload(pilarGltf);
