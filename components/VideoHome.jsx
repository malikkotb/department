"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function VideoHome() {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);
  const size = useWindowSize();

  useGSAP(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log(clientX, clientY);
      gsap.set(cursorRef.current, { x: clientX - clientX / 2, y: clientY - clientY / 2 });
    };

    sectionRef.current.addEventListener("mousemove", onMouseMove);

    // TODO: cursor also has to move with scroll otherwise its weird
    // TODO: move cursor back to middle of screen once mouse is off this section / or on header
  });
  return (
    <section ref={sectionRef} className="h-screen w-screen relative flex">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="absolute h-24 w-24 rounded-full pointer-events-none z-10 p-2 flex items-center justify-center bg-white"
      >
        <div className="cursor-text text-sm leading-tight text-center font-semibold text-black uppercase tracking-wide">
          Watch Reel
        </div>
      </div>
      {/* background-Video */}
      <video
        muted
        loop
        autoPlay
        className="video opacity-95 absolute w-full h-full object-cover"
      >
        <source src="/tennis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <video src="https://www.youtube.com/watch?v=JGwWNGJdvx8" controls></video> */}
    </section>
  );
}
