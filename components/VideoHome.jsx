"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function VideoHome() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.set(cursorRef.current, { x: clientX, y: clientY });
    };

    // TODO: instead of adding the eventListener to the document, add it to this page only or the
    // parent component
    document.addEventListener("mousemove", onMouseMove);
  });
  return (
    <section className="h-screen cursor-none borderr bg-blue-300">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="fixed top-0 left-0 h-24 w-24 rounded-full pointer-events-none z-50 p-2 flex items-center justify-center bg-white"
      >
        <div
          ref={textRef}
          className="cursor-text text-xs text-center font-semibold text-black uppercase tracking-wide"
        >
          Watch Reel
        </div>
      </div>

      {/* <video src="https://www.youtube.com/watch?v=JGwWNGJdvx8" controls></video> */}
    </section>
  );
}
