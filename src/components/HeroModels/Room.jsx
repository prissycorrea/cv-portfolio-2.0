import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const neonRef = useRef();

  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshStandardMaterial({
    color: "#5e4b8b",
    roughness: 0.5,
    metalness: 0.3,
  });

  const bodyMaterial = new THREE.MeshStandardMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    roughness: 0.6,
    metalness: 0.3,
  });

  const chairMaterial = new THREE.MeshStandardMaterial({
  color: "#1a1a1a",
  emissive: "#000000",
  emissiveIntensity: 0.0,
  roughness: 0.6,
  metalness: 0.3,
});

  const compMaterial = new THREE.MeshStandardMaterial({
  color: "#1a1a1a",
  emissive: "#000000",
  emissiveIntensity: 0.0,
});

  const monitorMaterial = new THREE.MeshStandardMaterial({
  color: "#1a1a1a",
  emissive: "#000000",
  emissiveIntensity: 0.0,
});

  const screenMaterial = materials.lambert1;

  const neonShelfMaterial = new THREE.MeshStandardMaterial({
    color: "#8a2be2",
    emissive: "#8a2be2",
    emissiveIntensity: 1.8,
  });

  const radiatorMaterial = new THREE.MeshStandardMaterial({
    color: "#e0e0e0",
  });

  const pillowMaterial = new THREE.MeshStandardMaterial({
    color: "#b0b0b0",
  });

  const defaultMaterial = new THREE.MeshStandardMaterial({
    color: "#333333",
    roughness: 0.7,
    metalness: 0.2,
  });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.1} />
      <pointLight position={[1, 3, 1]} intensity={1.5} color="#00ffff" />
      <pointLight position={[-2, 2, -2]} intensity={0.8} color="#ff00ff" />

      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} /><mesh geometry={nodes.chair_body_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry} material={screenMaterial} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={monitorMaterial} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={monitorMaterial} />
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={neonShelfMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.railing_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.stylus_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
