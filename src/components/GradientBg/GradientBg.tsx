import { useEffect, useRef } from "react";
import Granim from "granim";
import StarAnimation from "@/components/StarAnimation/StarAnimation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GradientBackground = ({ children }: any) => {
  const granimRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: granimRef.current,
      name: "basic-gradient",
      direction: "diagonal",
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#ff7e5f", "#feb47b"],
            ["#feb47b", "#ff7e5f"],
            ["#80d3fe", "#7eaee6"],
          ],
        },
      },
    });
    return () => {
      granimInstance.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh]">
      <canvas ref={granimRef} className="w-full h-full absolute inset-0" />
      <StarAnimation />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
