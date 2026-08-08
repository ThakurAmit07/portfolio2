"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function VolcanicConstellationCore() {
  const pointsRef = useRef<THREE.Points>(null!);
  const outerWireframeRef = useRef<THREE.Mesh>(null!);
  const innerWireframeRef = useRef<THREE.Mesh>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particleCount = isMobile ? 700 : 1800;

  // Generate particle positions with blend of Violet, Magma Orange, Cyan & Pure White
  const [positions, originalPositions, colors] = useMemo(() => {
    const posArr = new Float32Array(particleCount * 3);
    const origArr = new Float32Array(particleCount * 3);
    const colArr = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color("#7F5CFF");
    const colorMagma = new THREE.Color("#FF5500");
    const colorCyan = new THREE.Color("#4CE0FF");
    const colorWhite = new THREE.Color("#F5F5FA");

    const radius = 2.7;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.45;
      const y = radius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.45;
      const z = radius * Math.cos(phi) + (Math.random() - 0.5) * 0.45;

      posArr[i * 3] = x;
      posArr[i * 3 + 1] = y;
      posArr[i * 3 + 2] = z;

      origArr[i * 3] = x;
      origArr[i * 3 + 1] = y;
      origArr[i * 3 + 2] = z;

      // Color distribution: 45% Violet, 35% Magma Orange, 10% Cyan, 10% White
      const randColor = Math.random();
      const chosenColor =
        randColor < 0.45
          ? colorViolet
          : randColor < 0.8
          ? colorMagma
          : randColor < 0.9
          ? colorCyan
          : colorWhite;

      colArr[i * 3] = chosenColor.r;
      colArr[i * 3 + 1] = chosenColor.g;
      colArr[i * 3 + 2] = chosenColor.b;
    }

    return [posArr, origArr, colArr];
  }, [particleCount]);

  useFrame((state) => {
    const { pointer, clock } = state;
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.09 + pointer.x * 0.45;
      pointsRef.current.rotation.x = time * 0.06 + pointer.y * 0.35;
    }

    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.y = -time * 0.12 - pointer.x * 0.3;
      outerWireframeRef.current.rotation.z = time * 0.08;
    }

    if (innerWireframeRef.current) {
      innerWireframeRef.current.rotation.x = time * 0.15;
      innerWireframeRef.current.rotation.y = -time * 0.18;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = time * 0.25;
    }

    // Dynamic magnetic pulse & depth shift
    if (pointsRef.current) {
      const positionAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const array = positionAttr.array as Float32Array;

      const targetX = pointer.x * 2.5;
      const targetY = pointer.y * 2.5;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        const wave = Math.sin(time * 2.2 + ox * 0.6 + oy * 0.6) * 0.18;

        const dx = ox - targetX;
        const dy = oy - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const influence = Math.max(0, 1 - dist / 3);
        const push = Math.sin(influence * Math.PI) * 0.4;

        array[i3] = ox + (dx / (dist || 1)) * push + wave * 0.2;
        array[i3 + 1] = oy + (dy / (dist || 1)) * push + wave * 0.2;
        array[i3 + 2] = oz + wave * 0.35;
      }

      positionAttr.needsUpdate = true;
    }
  });

  return (
    <group scale={1.15}>
      {/* Outer Particle Constellation */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.045 : 0.055}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Outer Geometric Wireframe (Violet Accent) */}
      <mesh ref={outerWireframeRef}>
        <icosahedronGeometry args={[2.3, 2]} />
        <meshBasicMaterial wireframe color="#7F5CFF" transparent opacity={0.2} />
      </mesh>

      {/* Inner Geometric Wireframe (Magma Orange Accent) */}
      <mesh ref={innerWireframeRef}>
        <dodecahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial wireframe color="#FF5500" transparent opacity={0.35} />
      </mesh>

      {/* Glowing Inner Core Octahedron */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[1.0, 0]} />
        <meshStandardMaterial
          color="#1A0B36"
          emissive="#FF5500"
          emissiveIntensity={0.8}
          roughness={0.15}
          metalness={0.85}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[450px] lg:min-h-[600px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#FF5500" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7F5CFF" />

        <Float speed={2.0} rotationIntensity={0.5} floatIntensity={0.7}>
          <VolcanicConstellationCore />
        </Float>
      </Canvas>
    </div>
  );
}
