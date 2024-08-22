"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
export default function VideoHome() {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);
  const size = useWindowSize();
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ top: 450, left: 450 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setPosition({ top: 0, left: 0 });
  };

  useGSAP(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.set(cursorRef.current, { x: clientX, y: clientY, opacity: 1, duration: 1 });
    };

    const onMouseLeave = (event) => {
      gsap.set(cursorRef.current, { x: size.width / 2, y: size.height / 2 });
    };

    sectionRef.current.addEventListener("mousemove", onMouseMove);
    sectionRef.current.addEventListener("mouseout", onMouseLeave);

    // TODO: cursor also has to move with scroll otherwise its weird
    // TODO: move cursor back to middle of screen once mouse is off this section / or on header
  });
  return (
    <section
      ref={sectionRef}
      className="h-screen w-screen relative flex"
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          opacity: 0, // Initially hidden
        }}
        className={`${
          isHovered ? "absolute" : "fixed"
        } h-24 w-24 rounded-full pointer-events-none z-10 p-2 flex items-center justify-center bg-white`}
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
