import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Gerador pseudoaleatório com semente, para a lua ser sempre igual. */
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

/**
 * Cria as texturas da lua num <canvas> (sem baixar imagens):
 * uma de cor, em tons de lavanda e creme, e outra de relevo para as crateras.
 */
function createMoonTextures() {
  const width = 512;
  const height = 256;
  const colorCanvas = document.createElement("canvas");
  const bumpCanvas = document.createElement("canvas");
  colorCanvas.width = bumpCanvas.width = width;
  colorCanvas.height = bumpCanvas.height = height;
  const color = colorCanvas.getContext("2d")!;
  const bump = bumpCanvas.getContext("2d")!;
  const rand = seeded(11);

  color.fillStyle = "#EEE9F6";
  color.fillRect(0, 0, width, height);
  bump.fillStyle = "#808080";
  bump.fillRect(0, 0, width, height);

  // Desenha repetindo nas bordas para a textura fechar sem emenda.
  const wrapped = (x: number, r: number, draw: (x: number) => void) => {
    draw(x);
    if (x - r < 0) draw(x + width);
    if (x + r > width) draw(x - width);
  };

  // "Mares" lunares: manchas grandes e suaves
  for (let i = 0; i < 10; i++) {
    const x = rand() * width;
    const y = height * 0.2 + rand() * height * 0.6;
    const r = 24 + rand() * 50;
    wrapped(x, r, (cx) => {
      const g = color.createRadialGradient(cx, y, 0, cx, y, r);
      g.addColorStop(0, "rgba(176, 164, 222, 0.55)");
      g.addColorStop(1, "rgba(176, 164, 222, 0)");
      color.fillStyle = g;
      color.beginPath();
      color.arc(cx, y, r, 0, Math.PI * 2);
      color.fill();
    });
  }

  // Crateras: muitas pequenas, poucas grandes
  for (let i = 0; i < 160; i++) {
    const x = rand() * width;
    const y = rand() * height;
    const r = 1.5 + Math.pow(rand(), 3) * 15;
    wrapped(x, r, (cx) => {
      color.fillStyle = "rgba(150, 138, 200, 0.32)";
      color.beginPath();
      color.arc(cx, y, r, 0, Math.PI * 2);
      color.fill();
      color.strokeStyle = "rgba(255, 252, 245, 0.55)";
      color.lineWidth = Math.max(0.8, r * 0.18);
      color.beginPath();
      color.arc(cx + r * 0.12, y + r * 0.12, r, 0, Math.PI * 2);
      color.stroke();

      bump.fillStyle = "#5a5a5a";
      bump.beginPath();
      bump.arc(cx, y, r, 0, Math.PI * 2);
      bump.fill();
      bump.strokeStyle = "#b4b4b4";
      bump.lineWidth = Math.max(0.8, r * 0.22);
      bump.stroke();
    });
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;
  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  return { map, bumpMap };
}

function Moon({ spinning }: { spinning: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const { map, bumpMap } = useMemo(createMoonTextures, []);

  useEffect(
    () => () => {
      map.dispose();
      bumpMap.dispose();
    },
    [map, bumpMap],
  );

  useFrame((_, delta) => {
    if (spinning && mesh.current) {
      // Bem devagar: uma volta a cada ~50 segundos
      mesh.current.rotation.y += Math.min(delta, 0.05) * 0.125;
    }
  });

  return (
    <group rotation={[0.18, 0, 0.22]}>
      <mesh ref={mesh} rotation={[0, 2.2, 0]}>
        <sphereGeometry args={[1.45, 48, 48]} />
        <meshStandardMaterial map={map} bumpMap={bumpMap} bumpScale={0.9} roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

interface Moon3DProps {
  /** Quando falso, a cena para de renderizar (fora da tela ou com "reduzir movimento"). */
  active: boolean;
}

export default function Moon3D({ active }: Moon3DProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      frameloop={active ? "always" : "demand"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.55} color="#D9D1F7" />
      <directionalLight position={[-4, 2.5, 3]} intensity={2.6} color="#FFF4DC" />
      <directionalLight position={[4, -1, -2]} intensity={0.35} color="#4B3BB0" />
      <Moon spinning={active} />
    </Canvas>
  );
}
