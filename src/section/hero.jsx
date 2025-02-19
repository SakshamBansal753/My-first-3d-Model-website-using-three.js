import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import RealisticJungleTree from "./RealisticJungleTree"; // Import the converted model

const Hero = () => {
  return (
    <section className="min-h-screen mt-20 border-2 border-blue-500 w-full flex flex-col relative text-white">
      <div className="w-full mx-auto text-white c-space flex flex-col -mt-16 font-medium text-2xl">
        <p className="flex justify-center">Hlo my friend I am Saksham Nice to Meet you👋</p>
        <p className="flex justify-center mt-12 underline text-3xl font-['Open_Sans']">Tree</p>
      </div>
      
      <div className="w-full h-screen bg-white">
  <Canvas >
    <PerspectiveCamera makeDefault position={[0, 5, 120]} />
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <RealisticJungleTree scale={[5, 5, 5]} position={[0, -12, 0]} />
    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
  </Canvas>
</div>

    </section>
  );
};

export default Hero;
