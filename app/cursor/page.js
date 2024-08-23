import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
export default function page() {
  var parent1 = document.querySelector(".parent1");
  var parent2 = document.querySelector(".parent2");
  var displays;

  function onMouseMove(e) {
    // this refers to the caller
    console.log(this);

    // Find its child
    var follower = this.querySelector(".follower");

    gsap.to(follower, 0.3, {
      x: e.offsetX,
      y: e.offsetY,
      ease: Power4.easeOut,
    });

    displays.pX.textContent = e.pageX;
    displays.pY.textContent = e.pageY;

    displays.cX.textContent = e.clientX;
    displays.cY.textContent = e.clientY;

    displays.oX.textContent = e.offsetX;
    displays.oY.textContent = e.offsetY;
  }

  function onMouseLeave(e) {
    const rect = this.getBoundingClientRect();
    const center = {
      w: Math.round(rect.width * 0.5),
      h: Math.round(rect.height * 0.5),
    };
    const trg = this.querySelector(".follower");

    gsap.to(trg, 1, {
      x: center.w,
      y: center.h,
      ease: Back.easeInOut,
    });
  }

  function init() {
    // Listen for mouse movement when over either one of the parents
    parent1.addEventListener("mousemove", onMouseMove);
    parent2.addEventListener("mousemove", onMouseMove);

    parent1.addEventListener("mouseleave", onMouseLeave);
    parent2.addEventListener("mouseleave", onMouseLeave);
  }

  // wait until DOM is ready
  document.addEventListener("DOMContentLoaded", function (event) {
    // wait until window, stylesheets, images, links, and other media assets are loaded
    window.onload = function () {
      displays = {
        pX: document.querySelector(".pageX"),
        pY: document.querySelector(".pageY"),

        cX: document.querySelector(".clientX"),
        cY: document.querySelector(".clientY"),

        oX: document.querySelector(".offsetX"),
        oY: document.querySelector(".offsetY"),
      };

      // Center the pivot point of the follower
      TweenMax.set(".follower", {
        xPercent: -50,
        yPercent: -50,
      });

      // All ready, start!
      init();
    };
  });

  return <div>page</div>;
}
