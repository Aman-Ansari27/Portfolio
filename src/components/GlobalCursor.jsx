import React, { useEffect, useRef } from "react";

function GlobalCursor() {
  const glowRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const trailCount = 10;
    const trailPositions = Array.from({ length: trailCount }, () => ({
      x: mouseX,
      y: mouseY,
    }));

    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      // Cursor tip alignment
      const tipX = currentX  ;
      const tipY = currentY ;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${tipX - 110}px, ${tipY - 110}px)`;
      }

      // Trail
      trailPositions[0].x += (tipX - trailPositions[0].x) * 0.28;
      trailPositions[0].y += (tipY - trailPositions[0].y) * 0.28;

      for (let i = 1; i < trailCount; i++) {
        trailPositions[i].x +=
          (trailPositions[i - 1].x - trailPositions[i].x) * 0.28;
        trailPositions[i].y +=
          (trailPositions[i - 1].y - trailPositions[i].y) * 0.28;
      }

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          trail.style.transform = `translate(${trailPositions[index].x - 5}px, ${trailPositions[index].y - 5}px) scale(${1 - index * 0.06})`;
          trail.style.opacity = `${1 - index * 0.09}`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow-tip"></div>

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail-tip"
        ></div>
      ))}
    </>
  );
}

export default GlobalCursor;