import { useEffect, useState } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

const useVanta = (ref) => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        BIRDS({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x10132e,
          color1: 0x00ff40,
          color2: 0x007bff,
          birdSize: 1.2,
          speed: 1.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, ref]);

  return vANTAEffect;
};

export default useVanta;