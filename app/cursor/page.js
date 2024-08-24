"use client";
// import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MouseTracker() {
  const parent1Ref = useRef(null);
  const parent2Ref = useRef(null);
  const [displays, setDisplays] = useState({
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const onMouseMove = (e) => {
    const follower = e.currentTarget.querySelector(".follower");

    gsap.to(follower, {
      duration: 0.3,
      x: e.offsetX,
      y: e.offsetY,
      ease: "power4.out",
    });

    setDisplays({
      pageX: e.pageX,
      pageY: e.pageY,
      clientX: e.clientX,
      clientY: e.clientY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
    });
  };

  const onMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const center = {
      w: Math.round(rect.width * 0.5),
      h: Math.round(rect.height * 0.5),
    };
    const follower = e.currentTarget.querySelector(".follower");

    gsap.to(follower, {
      duration: 1,
      x: center.w,
      y: center.h,
      ease: "back.inOut",
    });
  };

  useEffect(() => {
    const parent1 = parent1Ref.current;
    const parent2 = parent2Ref.current;

    parent1.addEventListener("mousemove", onMouseMove);
    parent2.addEventListener("mousemove", onMouseMove);

    parent1.addEventListener("mouseleave", onMouseLeave);
    parent2.addEventListener("mouseleave", onMouseLeave);

    return () => {
      parent1.removeEventListener("mousemove", onMouseMove);
      parent2.removeEventListener("mousemove", onMouseMove);

      parent1.removeEventListener("mouseleave", onMouseLeave);
      parent2.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div>
      <div ref={parent1Ref} className="container" style={{ position: "relative" }}>
        <div className="follower"></div>
      </div>
      <div ref={parent2Ref} className="container" style={{ position: "relative" }}>
        <div className="follower"></div>
      </div>

      <div>
        <p>Page X: {displays.pageX}</p>
        <p>Page Y: {displays.pageY}</p>
        <p>Client X: {displays.clientX}</p>
        <p>Client Y: {displays.clientY}</p>
        <p>Offset X: {displays.offsetX}</p>
        <p>Offset Y: {displays.offsetY}</p>
      </div>
    </div>
  );
}