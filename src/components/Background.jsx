import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Continuous movement
      if (ref.current.position.z > (0.9 + 0.1)) {
        ref.current.position.z = -0.4;
      }
      ref.current.position.z += delta / 3;
      
      // Add subtle rotation for more dynamic effect
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#8b5cf6' // Purple color to match theme
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const ColorfulStars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower movement for layered effect
      if (ref.current.position.z > 1.2) {
        ref.current.position.z = -0.6;
      }
      ref.current.position.z += delta / 4;
      
      // Different rotation axis
      ref.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group rotation={[Math.PI / 6, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#06b6d4' // Cyan color for variety
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const AccentStars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 0.8 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Fastest movement for depth
      if (ref.current.position.z > 0.8) {
        ref.current.position.z = -0.8;
      }
      ref.current.position.z += delta / 2;
      
      // Counter-rotation for visual interest
      ref.current.rotation.x -= delta * 0.04;
      ref.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group rotation={[0, Math.PI / 3, Math.PI / 8]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f59e0b' // Golden accent
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const FloatingParticles = () => {
  const ref = useRef();
  const [particles] = useState(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Gentle floating motion
      ref.current.rotation.y += delta * 0.1;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color='#ec4899' // Pink accent
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

const Background = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1] overflow-hidden'>
      {/* Gradient overlay for better integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-slate-900/20 pointer-events-none" />
      
      {/* Additional CSS background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Three.js Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        className="blur-[0.5px]"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Multiple layers of stars for depth */}
          <Stars />
          <ColorfulStars />
          <AccentStars />
          <FloatingParticles />
          
          {/* Ambient lighting for better visibility */}
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#06b6d4" />
        </Suspense>
        <Preload all />
      </Canvas>
      
      {/* Additional animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 4 + 4 + 's',
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default Background;