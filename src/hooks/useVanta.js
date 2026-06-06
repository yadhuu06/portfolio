import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const useVanta = (containerRef) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    vantaRef.current = NET({
      el: containerRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x6366f1,
      backgroundColor: 0x0f0f0f,
      points: 8.0,
      maxDistance: 20.0,
      spacing: 18.0,
    });

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, [containerRef]);

  return vantaRef.current;
};

export default useVanta;
