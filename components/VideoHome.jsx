"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function VideoHome() {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);
  const size = useWindowSize();
  console.log(size)

  useGSAP(() => {
    if (size) {
      // console.log(size)
      gsap.set(cursorRef.current, { x: size.width / 2, y: size.height / 2 });
    }
    // const onMouseMove = (event) => {
    //   const { clientX, clientY } = event;
    //   gsap.set(cursorRef.current, { x: clientX, y: clientY });
    // };

    // TODO: move cursor back to middle of screen once mouse is off this section / or on header

    // sectionRef.current.addEventListener("mousemove", onMouseMove);
  });
  return (
    <section ref={sectionRef} className="h-screen borderr cursor-none bg-blue-300">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="fixed -top-12 -left-12 h-24 w-24 rounded-full pointer-events-none z-10 p-2 flex items-center justify-center bg-white"
      >
        <div className="cursor-text text-sm leading-tight text-center font-semibold text-black uppercase tracking-wide">
          Watch Reel
        </div>
      </div>
      <video muted loop autoPlay className="video">
        <source src="/tennis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <video src="https://www.youtube.com/watch?v=JGwWNGJdvx8" controls></video> */}
    </section>
  );
}
