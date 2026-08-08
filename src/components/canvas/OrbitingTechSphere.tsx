"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Database, 
  Server, 
  Terminal, 
  Flame, 
  Zap,
  Boxes
} from "lucide-react";

interface TechNode {
  name: string;
  icon: React.ReactNode;
  orbitRadius: number;
  speed: number;
  angleOffset: number;
  yOffset: number;
  color: string;
}

const techItems: TechNode[] = [
  { name: "React / Next.js", icon: <Code2 className="w-4 h-4" />, orbitRadius: 2.6, speed: 0.4, angleOffset: 0, yOffset: 0.2, color: "#7F5CFF" },
  { name: "TypeScript", icon: <Terminal className="w-4 h-4" />, orbitRadius: 2.6, speed: 0.4, angleOffset: Math.PI * 0.66, yOffset: -0.2, color: "#4CE0FF" },
  { name: "Tailwind CSS", icon: <Layers className="w-4 h-4" />, orbitRadius: 2.6, speed: 0.4, angleOffset: Math.PI * 1.33, yOffset: 0.4, color: "#FF5500" },
  
  { name: "Three.js & WebGL", icon: <Boxes className="w-4 h-4" />, orbitRadius: 3.7, speed: -0.3, angleOffset: 0.5, yOffset: -0.5, color: "#FF5500" },
  { name: "Node.js & APIs", icon: <Server className="w-4 h-4" />, orbitRadius: 3.7, speed: -0.3, angleOffset: 2.5, yOffset: 0.5, color: "#68A063" },
  { name: "Python & AI", icon: <Cpu className="w-4 h-4" />, orbitRadius: 3.7, speed: -0.3, angleOffset: 4.5, yOffset: -0.1, color: "#3776AB" },
  
  { name: "PostgreSQL & Prisma", icon: <Database className="w-4 h-4" />, orbitRadius: 4.6, speed: 0.25, angleOffset: 1.2, yOffset: 0.7, color: "#4CE0FF" },
  { name: "GraphQL & Redis", icon: <Zap className="w-4 h-4" />, orbitRadius: 4.6, speed: 0.25, angleOffset: 3.2, yOffset: -0.6, color: "#E535AB" },
  { name: "Docker & Cloud", icon: <Globe className="w-4 h-4" />, orbitRadius: 4.6, speed: 0.25, angleOffset: 5.2, yOffset: 0.3, color: "#7F5CFF" },
];

function OrbitingGroup() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Volcanic Core */}
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshStandardMaterial
            color="#1A0B22"
            emissive="#FF5500"
            emissiveIntensity={0.9}
            roughness={0.15}
            wireframe
          />
        </mesh>
        <Html center distanceFactor={10}>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#12121C]/90 border border-[#FF5500] shadow-[0_0_25px_rgba(255,85,0,0.7)] backdrop-blur-md">
            <Flame className="w-6 h-6 text-[#FF5500] animate-pulse" />
          </div>
        </Html>
      </Float>

      {/* Orbit Rings Wireframes */}
      {[2.6, 3.7, 4.6].map((radius, idx) => (
        <mesh key={idx} rotation={[Math.PI / 3.5, Math.PI / 5, 0]}>
          <ringGeometry args={[radius - 0.018, radius + 0.018, 64]} />
          <meshBasicMaterial
            color={idx === 0 ? "#7F5CFF" : idx === 1 ? "#FF5500" : "#4CE0FF"}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Tech Nodes */}
      {techItems.map((item, idx) => {
        const x = item.orbitRadius * Math.cos(item.angleOffset);
        const z = item.orbitRadius * Math.sin(item.angleOffset);
        const y = item.yOffset;

        return (
          <group key={idx} position={[x, y, z]}>
            <Html center distanceFactor={12}>
              <div 
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12121C]/90 border border-[#7F5CFF]/30 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-115 hover:border-[#FF5500] hover:shadow-[0_0_20px_rgba(255,85,0,0.5)] whitespace-nowrap cursor-pointer"
                style={{ borderColor: item.color + "66" }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <span className="text-xs font-semibold text-[#F5F5FA] tracking-wide font-sans">{item.name}</span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function OrbitingTechSphere() {
  return (
    <div className="w-full h-[400px] md:h-[520px] relative">
      <Canvas camera={{ position: [0, 0, 9.2], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} color="#FF5500" intensity={1.5} />
        <pointLight position={[-5, -5, -5]} color="#7F5CFF" intensity={1.2} />
        <OrbitingGroup />
      </Canvas>
    </div>
  );
}
