import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera & WebGL Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070706, 0.002);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      800
    );
    camera.position.set(0, 0, 75);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x070706, 1);
    container.appendChild(renderer.domElement);

    // 2. High-Tech Kinetic Neural Constellation Nodes (Optimized for ultra-smooth 120fps)
    const nodeCount = 52;
    const nodeData = Array.from({ length: nodeCount }, () => ({
      x: (Math.random() - 0.5) * 110,
      y: (Math.random() - 0.5) * 65,
      z: (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      vz: (Math.random() - 0.5) * 0.02,
    }));

    // Node Points Geometry
    const nodeGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const bronzeColor = new THREE.Color(0xc3a47b);
    const brightColor = new THREE.Color(0xdec7a8);

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = nodeData[i].x;
      nodePositions[i * 3 + 1] = nodeData[i].y;
      nodePositions[i * 3 + 2] = nodeData[i].z;

      const col = Math.random() > 0.4 ? bronzeColor : brightColor;
      nodeColors[i * 3] = col.r;
      nodeColors[i * 3 + 1] = col.g;
      nodeColors[i * 3 + 2] = col.b;
    }

    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    // Custom circular glow texture for nodes
    const makeDotTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(195, 164, 123, 0.85)');
      grad.addColorStop(0.7, 'rgba(195, 164, 123, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const nodeTexture = makeDotTexture();

    const nodeMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: nodeTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeo, nodeMaterial);
    scene.add(nodePoints);

    // 3. Dynamic Laser Network Lines (Constellation filaments)
    const maxLines = 80;
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const lineColors = new Float32Array(maxLines * 2 * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeo, lineMaterial);
    scene.add(linesMesh);

    // 4. Subtle Radial Atmospheric Light Sprite
    const makeGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(195, 164, 123, 0.2)');
      grad.addColorStop(0.5, 'rgba(195, 164, 123, 0.04)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(canvas);
    };

    const glowTexture = makeGlowTexture();
    const glowMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.55,
    });

    const ambientGlowSprite = new THREE.Sprite(glowMaterial);
    ambientGlowSprite.scale.set(70, 70, 1);
    ambientGlowSprite.position.set(0, 2, -15);
    scene.add(ambientGlowSprite);

    setIsLoaded(true);

    // 5. Mouse tracking directly without state
    let normMouseX = 0;
    let normMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      normMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      normMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop (Locked 60-120fps)
    let animationFrameId: number;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const maxConnectDist = 18;
    const maxConnectDistSq = maxConnectDist * maxConnectDist;
    const pointerImpactDist = 22;
    const pointerImpactDistSq = pointerImpactDist * pointerImpactDist;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth pointer interpolation
      targetPointerX = normMouseX * 24;
      targetPointerY = -normMouseY * 14;
      pointerX += (targetPointerX - pointerX) * 0.05;
      pointerY += (targetPointerY - pointerY) * 0.05;

      // Camera Sway
      camera.position.x = pointerX * 0.35;
      camera.position.y = pointerY * 0.35;
      camera.lookAt(0, 0, 0);

      ambientGlowSprite.position.x = pointerX * 0.5;
      ambientGlowSprite.position.y = pointerY * 0.5;

      if (!prefersReducedMotion) {
        let lineVertexIndex = 0;
        let lineCount = 0;

        const posAttr = nodeGeo.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        const linePosAttr = lineGeo.attributes.position as THREE.BufferAttribute;
        const linePosArray = linePosAttr.array as Float32Array;

        const lineColAttr = lineGeo.attributes.color as THREE.BufferAttribute;
        const lineColArray = lineColAttr.array as Float32Array;

        for (let i = 0; i < nodeCount; i++) {
          const node = nodeData[i];

          // Natural drift
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          // Boundary bounce
          if (node.x < -55 || node.x > 55) node.vx *= -1;
          if (node.y < -35 || node.y > 35) node.vy *= -1;
          if (node.z < -25 || node.z > 25) node.vz *= -1;

          // Gentle magnetic push using squared distance first
          const dx = node.x - pointerX;
          const dy = node.y - pointerY;
          const distSq = dx * dx + dy * dy;

          if (distSq < pointerImpactDistSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / pointerImpactDist) * 0.25;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }

          posArray[i * 3] = node.x;
          posArray[i * 3 + 1] = node.y;
          posArray[i * 3 + 2] = node.z;

          // Connect nearby neighbor nodes (fast squared distance check)
          for (let j = i + 1; j < nodeCount; j++) {
            if (lineCount >= maxLines) break;

            const n2 = nodeData[j];
            const distX = node.x - n2.x;
            const distY = node.y - n2.y;
            const distZ = node.z - n2.z;
            const pairDistSq = distX * distX + distY * distY + distZ * distZ;

            if (pairDistSq < maxConnectDistSq) {
              const pairDist = Math.sqrt(pairDistSq);
              const alpha = Math.max(0, 1 - pairDist / maxConnectDist) * 0.28;

              linePosArray[lineVertexIndex * 3] = node.x;
              linePosArray[lineVertexIndex * 3 + 1] = node.y;
              linePosArray[lineVertexIndex * 3 + 2] = node.z;
              lineColArray[lineVertexIndex * 3] = 0.76 * alpha;
              lineColArray[lineVertexIndex * 3 + 1] = 0.64 * alpha;
              lineColArray[lineVertexIndex * 3 + 2] = 0.48 * alpha;
              lineVertexIndex++;

              linePosArray[lineVertexIndex * 3] = n2.x;
              linePosArray[lineVertexIndex * 3 + 1] = n2.y;
              linePosArray[lineVertexIndex * 3 + 2] = n2.z;
              lineColArray[lineVertexIndex * 3] = 0.76 * alpha;
              lineColArray[lineVertexIndex * 3 + 1] = 0.64 * alpha;
              lineColArray[lineVertexIndex * 3 + 2] = 0.48 * alpha;
              lineVertexIndex++;

              lineCount++;
            }
          }
        }

        posAttr.needsUpdate = true;

        for (let k = lineVertexIndex * 3; k < linePosArray.length; k++) {
          linePosArray[k] = 0;
          lineColArray[k] = 0;
        }

        linePosAttr.needsUpdate = true;
        lineColAttr.needsUpdate = true;
        lineGeo.setDrawRange(0, lineCount * 2);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      nodeGeo.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();
      lineGeo.dispose();
      lineMaterial.dispose();
      glowTexture.dispose();
      glowMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={`hero-scene-container ${isLoaded ? 'is-ready' : 'is-loading'}`}
      style={{ pointerEvents: 'none' }}
    >
      <div
        ref={mountRef}
        className="shader-frame"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      <div className="scene-overlay-gradient" />
    </div>
  );
};

export default HeroScene;
