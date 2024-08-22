"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
export default function Cursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, { x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", onMouseMove);
  });

  return (
    <div ref={cursorRef} id="custom-cursor">
      <div
        ref={textRef}
        className="cursor-text text-xs font-bold uppercase tracking-wide hidden"
      >
        Watch Reel
      </div>
    </div>
  );
}
