/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const NounsLogo = (props) => {
  const group = useRef();
  const materialRef = useRef();
  const { nodes, materials } = useGLTF('/nouns-logo-model.gltf');

  //   const testMaterial = new THREE.MeshStandardMaterial('#d63c5e');
  const testMaterial = new THREE.MeshPhongMaterial({
    color: 0xd63c5e,
    shininess: 0.1,
    opacity: 1,
    transparent: false,
  });

  useFrame((state, delta) => {
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 0.25;
    // group.current.rotation.x =
    //   group.current.rotation.y =
    //   group.current.rotation.z +=
    //     delta;
    // materialRef.current.material.wireframe = true;
  });

  testMaterial.color.setHex(0xd63c5e).convertSRGBToLinear();
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={testMaterial}
        rotation={[1.57, 0, 0]}
        scale={[20, 20, 20]}
        position={[-0.5, 1.25, -2]}
        ref={materialRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          material={testMaterial}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/nouns-logo-model.gltf');

export default NounsLogo;
