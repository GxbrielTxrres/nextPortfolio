import "../styles/globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight, Stars, Effects } from "@react-three/drei";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Canvas dpr={1.5}>
        <OrbitControls />
        <ambientLight />
        <SpotLight position={[0, 4, 0]} />

        <Stars />
      </Canvas>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
