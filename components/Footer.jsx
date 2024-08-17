import React from "react";

export default function Footer() {
  return (
      {images.map((src, index) => (
      <div key={index}>
        <div
          ref={addToImageRefs}
          onMouseEnter={() => handleHover(1.2, index)}
          onMouseLeave={() => handleHover(1, index)}
          className="w-[20vw] h-[40vh] relative">
            <Image src={src} fill style={{ objectFit: "cover" }} alt="run" />
        </div>  
    </div>)}
  );
}
