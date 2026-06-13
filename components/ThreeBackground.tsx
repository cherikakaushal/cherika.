import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Theme } from '../pages';

type Velocity = {
  x: number;
  y: number;
  z: number;
};

type ThemeProps = {
  theme: Theme;
};

type ParticleProps = ThemeProps & {
  count?: number;
};

function Particles({ count = 900, theme }: ParticleProps) {
  const mesh = useRef<THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const [positions, velocities] = useMemo<[Float32Array, Velocity[]]>(() => {
    const nextPositions = new Float32Array(count * 3);
    const nextVelocities: Velocity[] = [];

    for (let index = 0; index < count; index += 1) {
      nextPositions[index * 3] = (Math.random() - 0.5) * 28;
      nextPositions[index * 3 + 1] = (Math.random() - 0.5) * 18;
      nextPositions[index * 3 + 2] = (Math.random() - 0.5) * 10;
      nextVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.001,
      });
    }

    return [nextPositions, nextVelocities];
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    const time = clock.getElapsedTime();
    const positionAttribute = mesh.current.geometry.getAttribute('position') as THREE.BufferAttribute;
    const positionArray = positionAttribute.array as Float32Array;

    for (let index = 0; index < count; index += 1) {
      positionArray[index * 3] += velocities[index].x + Math.sin(time * 0.1 + index) * 0.001;
      positionArray[index * 3 + 1] += velocities[index].y + Math.cos(time * 0.13 + index) * 0.001;
      positionArray[index * 3 + 2] += velocities[index].z;

      const dx = mouse.current.x * 14 - positionArray[index * 3];
      const dy = mouse.current.y * 9 - positionArray[index * 3 + 1];
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < 3) {
        positionArray[index * 3] -= (dx / distance) * 0.008;
        positionArray[index * 3 + 1] -= (dy / distance) * 0.008;
      }

      if (positionArray[index * 3] > 14) positionArray[index * 3] = -14;
      if (positionArray[index * 3] < -14) positionArray[index * 3] = 14;
      if (positionArray[index * 3 + 1] > 9) positionArray[index * 3 + 1] = -9;
      if (positionArray[index * 3 + 1] < -9) positionArray[index * 3 + 1] = 9;
    }

    positionAttribute.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
    mesh.current.rotation.x = Math.sin(time * 0.015) * 0.08;
  });

  const color = theme === 'light' ? '#c4607a' : '#d4869a';

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={color}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Lines({ theme }: ThemeProps) {
  const mesh = useRef<THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial> | null>(null);
  const count = 60;

  const positions = useMemo(() => {
    const nextPositions = new Float32Array(count * 6);

    for (let index = 0; index < count; index += 1) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 8;
      const length = Math.random() * 1.2 + 0.3;
      const angle = Math.random() * Math.PI * 2;

      nextPositions[index * 6] = x;
      nextPositions[index * 6 + 1] = y;
      nextPositions[index * 6 + 2] = z;
      nextPositions[index * 6 + 3] = x + Math.cos(angle) * length;
      nextPositions[index * 6 + 4] = y + Math.sin(angle) * length;
      nextPositions[index * 6 + 5] = z;
    }

    return nextPositions;
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    const time = clock.getElapsedTime();
    mesh.current.rotation.z = time * 0.01;
    mesh.current.rotation.x = Math.sin(time * 0.008) * 0.05;
  });

  const color = theme === 'light' ? '#c4607a' : '#d4869a';

  return (
    <lineSegments ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.08} depthWrite={false} />
    </lineSegments>
  );
}

export default function ThreeBackground({ theme }: ThemeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="three-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles count={800} theme={theme} />
        <Lines theme={theme} />
      </Canvas>
    </div>
  );
}
