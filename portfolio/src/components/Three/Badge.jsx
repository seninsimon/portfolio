// src/components/Three/Badge.jsx
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer, Text, RenderTexture, PerspectiveCamera, Image } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { useMediaQuery } from 'react-responsive';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Badge() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="w-full h-full relative">
      <Canvas 
        camera={{ 
          position: isMobile ? [0, 0, 15] : isTablet ? [0, 0, 14] : [0, 0, 13], 
          fov: isMobile ? 30 : isTablet ? 28 : 25 
        }} 
        dpr={[1, 2]} 
        gl={{ alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band isMobile={isMobile} isTablet={isTablet} />
        </Physics>
        <Environment blur={isMobile ? 0.5 : 0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ isMobile, isTablet, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 };
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Adjust physics for mobile
  const physicsGravity = isMobile ? [0, -30, 0] : [0, -40, 0];
  
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.25 * (isMobile ? 0.8 : 1), 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ 
        x: vec.x - dragged.x, 
        y: vec.y - dragged.y, 
        z: vec.z - dragged.z 
      });
    }
    if (fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  // Responsive badge dimensions
  const badgeWidth = isMobile ? 1.4 : isTablet ? 1.6 : 1.8;
  const badgeHeight = isMobile ? 2.0 : isTablet ? 2.2 : 2.5;
  const fontSizeTitle = isMobile ? 0.18 : isTablet ? 0.2 : 0.22;
  const fontSizeName = isMobile ? 0.14 : isTablet ? 0.15 : 0.16;

  return (
    <>
      <group position={[0, isMobile ? 3 : 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody 
          position={[2, 0, 0]} 
          ref={card} 
          {...segmentProps} 
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[badgeWidth/2, badgeHeight/2, 0.01]} />
          
          {/* Badge Card */}
          <group
             onPointerOver={() => hover(true)}
             onPointerOut={() => hover(false)}
             onPointerUp={(e) => {
               e.target.releasePointerCapture(e.pointerId);
               drag(false);
             }}
             onPointerDown={(e) => {
               e.target.setPointerCapture(e.pointerId);
               drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
             }}
          >
            <mesh>
                <planeGeometry args={[badgeWidth, badgeHeight]} />
                <meshStandardMaterial 
                  transparent 
                  opacity={0.9} 
                  side={THREE.DoubleSide} 
                  metalness={0.8} 
                  roughness={0.2}
                >
                  <RenderTexture attach="map" anisotropy={16}>
                    <PerspectiveCamera 
                      makeDefault 
                      manual 
                      aspect={badgeWidth / badgeHeight} 
                      position={[0, 0, 5]} 
                    />
                    <color attach="background" args={['white']} />
                    <group>
                        {/* Profile Image */}
                        <Image 
                          url="/images/dp.jpg" 
                          position={[0, 0, 0]} 
                          scale={[badgeWidth, badgeHeight]} 
                        />
                        
                        {/* Overlay Gradient */}
                        <mesh position={[0, -0.6 * (badgeHeight/2.5), 0.01]}>
                            <planeGeometry args={[badgeWidth, badgeHeight * 0.35]} />
                            <meshBasicMaterial color="black" transparent opacity={0.6} />
                        </mesh>
                        
                        {/* Job Title */}
                         <Text 
                           fontSize={fontSizeTitle} 
                           color="white" 
                           position={[0, -0.6 * (badgeHeight/2.5), 0.02]} 
                           font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff" 
                           fontWeight="bold"
                           maxWidth={badgeWidth - 0.2}
                           textAlign="center"
                         >
                            Software Developer
                        </Text>
                         <Text 
                           fontSize={fontSizeName} 
                           color="#d1d5db" 
                           position={[0, -0.8 * (badgeHeight/2.5), 0.02]} 
                           font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                           maxWidth={badgeWidth - 0.2}
                           textAlign="center"
                         >
                            John Doe
                        </Text>
                    </group>
                  </RenderTexture>
                </meshStandardMaterial>
            </mesh>
            
            {/* Clip/Ring at the top */}
            <mesh position={[0, badgeHeight/2 - 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.04, 0.04, badgeWidth * 0.25, 16]} />
                <meshStandardMaterial color="#333" />
            </mesh>
          </group>
        </RigidBody>
      </group>
      
      {/* Connecting line */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          transparent 
          opacity={0.6} 
          color="black" 
          depthTest={false} 
          resolution={[width, height]} 
          lineWidth={isMobile ? 0.3 : 0.5} 
        />
      </mesh>
    </>
  );
}