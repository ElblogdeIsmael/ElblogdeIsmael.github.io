import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// ---- Constelación de saberes -------------------------------------------------
// Grafo de nodos (= asignaturas) unidos por líneas que derivan despacio. El
// puntero repele los nodos cercanos. Sin esfera, sin "bola".

const NODE_COUNT = 28;
const SPREAD = new THREE.Vector3(9, 5.2, 4);
const LINK_DIST = 2.7; // umbral de conexión
const REPEL_RADIUS = 2.2;
const REPEL_FORCE = 1.4;

const LABELS = [
  "Cálculo",
  "IA",
  "Redes",
  "ADE",
  "Minería",
  "NLP",
];

type Node = {
  base: THREE.Vector3;
  pos: THREE.Vector3;
  phase: number;
  amp: number;
  accent: 0 | 1 | 2; // 0 teal, 1 lima, 2 ámbar
};

function makeNodes(): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const base = new THREE.Vector3(
      (Math.random() - 0.5) * SPREAD.x,
      (Math.random() - 0.5) * SPREAD.y,
      (Math.random() - 0.5) * SPREAD.z,
    );
    nodes.push({
      base,
      pos: base.clone(),
      phase: Math.random() * Math.PI * 2,
      amp: 0.25 + Math.random() * 0.4,
      accent: i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0,
    });
  }
  return nodes;
}

const COLORS = {
  0: new THREE.Color("#2ee6c5"),
  1: new THREE.Color("#b8ff3c"),
  2: new THREE.Color("#ffb627"),
} as const;

function Constellation() {
  const nodes = useMemo(makeNodes, []);
  const group = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  // buffers
  const pointPos = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
  const pointCol = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    nodes.forEach((n, i) => {
      const c = COLORS[n.accent];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    });
    return arr;
  }, [nodes]);

  // pares candidatos a conectar (fijos: mismos índices, opacidad varía con dist)
  const pairs = useMemo(() => {
    const p: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].base.distanceTo(nodes[j].base) < LINK_DIST * 1.35) {
          p.push([i, j]);
        }
      }
    }
    return p;
  }, [nodes]);

  const linePos = useMemo(() => new Float32Array(pairs.length * 2 * 3), [pairs]);
  const lineCol = useMemo(() => new Float32Array(pairs.length * 2 * 3), [pairs]);

  const pointer = useRef(new THREE.Vector3());

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // puntero → plano del mundo (aprox z=0)
    pointer.current.set(
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
      0,
    );

    // posición de cada nodo: base + deriva + repulsión
    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i];
      n.pos.set(
        n.base.x + Math.sin(t * 0.35 + n.phase) * n.amp,
        n.base.y + Math.cos(t * 0.3 + n.phase * 1.3) * n.amp,
        n.base.z + Math.sin(t * 0.25 + n.phase * 0.7) * n.amp * 0.6,
      );
      const dx = n.pos.x - pointer.current.x;
      const dy = n.pos.y - pointer.current.y;
      const d = Math.hypot(dx, dy);
      if (d < REPEL_RADIUS && d > 0.0001) {
        const f = (1 - d / REPEL_RADIUS) * REPEL_FORCE;
        n.pos.x += (dx / d) * f;
        n.pos.y += (dy / d) * f;
      }
      pointPos[i * 3] = n.pos.x;
      pointPos[i * 3 + 1] = n.pos.y;
      pointPos[i * 3 + 2] = n.pos.z;
    }

    // líneas: opacidad por distancia (fade al superar el umbral)
    const teal = COLORS[0];
    for (let k = 0; k < pairs.length; k++) {
      const [a, b] = pairs[k];
      const pa = nodes[a].pos;
      const pb = nodes[b].pos;
      const dist = pa.distanceTo(pb);
      const alpha = Math.max(0, 1 - dist / LINK_DIST);
      const o = k * 6;
      linePos[o] = pa.x;
      linePos[o + 1] = pa.y;
      linePos[o + 2] = pa.z;
      linePos[o + 3] = pb.x;
      linePos[o + 4] = pb.y;
      linePos[o + 5] = pb.z;
      const c = alpha * 0.6;
      for (let s = 0; s < 2; s++) {
        lineCol[o + s * 3] = teal.r * c;
        lineCol[o + s * 3 + 1] = teal.g * c;
        lineCol[o + s * 3 + 2] = teal.b * c;
      }
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.getAttribute("position");
      (attr as THREE.BufferAttribute).needsUpdate = true;
    }
    if (linesRef.current) {
      const lp = linesRef.current.geometry.getAttribute("position");
      const lc = linesRef.current.geometry.getAttribute("color");
      (lp as THREE.BufferAttribute).needsUpdate = true;
      (lc as THREE.BufferAttribute).needsUpdate = true;
    }
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.06) * 0.18;
    }
  });

  return (
    <group ref={group}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePos, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[lineCol, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent depthWrite={false} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPos, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[pointCol, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          sizeAttenuation
          transparent
          depthWrite={false}
        />
      </points>

      {/* etiquetas de saberes en los primeros nodos */}
      {LABELS.map((label, i) => (
        <Html
          key={label}
          position={nodes[i * 3].base}
          center
          distanceFactor={10}
          zIndexRange={[5, 0]}
          style={{ pointerEvents: "none" }}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              fontFamily: "Manrope, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "rgba(244,247,245,0.85)",
              background: "rgba(20,24,29,0.55)",
              border: "1px solid rgba(46,230,197,0.35)",
              borderRadius: "999px",
              padding: "2px 9px",
              backdropFilter: "blur(4px)",
            }}
          >
            {label}
          </span>
        </Html>
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Constellation />
    </Canvas>
  );
}
