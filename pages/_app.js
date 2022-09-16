import "../styles/globals.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import styles from "../styles/Home.module.css";
import { Suspense, useRef } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Canvas dpr={1.5}>
        <OrbitControls />
        <Stars />
      </Canvas>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
