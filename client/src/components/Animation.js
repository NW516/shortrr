import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Animation.css";

const Animation = () => {
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);

  useEffect(() => {
      gsap.to (r1.current, {x: -30, duration: 2.4});
      gsap.to (r2.current, {x: -50, duration: 2.4});
      gsap.to (r3.current, {x: -70, duration: 2.4});
      gsap.to (r4.current, {x: -90, duration: 2.4});

  }, []);

  return (
    <div>
    <svg viewBox="0 0 300 45" width="340" height="50">
      <text className="shortr-logo" x="0" y="45" fill="#1fbddf">S</text>
      <text className="shortr-logo" x="20" y="45" fill="#1fbddf">H</text>
      <text className="shortr-logo" x="40" y="45" fill="#1fbddf">O</text>
      <text className="shortr-logo" x="60" y="45" fill="#1fbddf">R</text>
      <text className="shortr-logo" x="80" y="45" fill="#1fbddf">T</text>
      <text className="shortr-logo" x="100" y="45" fill="#1fbddf">R</text>
      <text ref={r1} className="shortr-logo" x="130" y="45" fill="#1fbddf">R</text>
      <text ref={r2} className="shortr-logo" x="150" y="45" fill="#1fbddf">R</text>
      <text ref={r3} className="shortr-logo" x="170" y="45" fill="#1fbddf">R</text>
    </svg>
    </div>
  );
};

export default Animation;
