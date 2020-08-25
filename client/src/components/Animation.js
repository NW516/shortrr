import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Animation.css";

const Animation = () => {
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);

  useEffect(() => {
      gsap.to (r1.current, {x: -20, duration: 1.5});
      gsap.to (r2.current, {x: -40, duration: 1.5});
      gsap.to (r3.current, {x: -60, duration: 1.5});
      gsap.to (r4.current, {x: -80, duration: 1.5});

  }, []);

  return (
    <div>
    <svg viewBox="0 0 300 45" width="340" height="80">
      <text className="shortr-logo" x="0" y="16.6" fill="#de4431">S</text>
      <text className="shortr-logo" x="20" y="16.6" fill="#de4431">H</text>
      <text className="shortr-logo" x="40" y="16.6" fill="#de4431">O</text>
      <text className="shortr-logo" x="60" y="16.6" fill="#de4431">R</text>
      <text className="shortr-logo" x="80" y="16.6" fill="#de4431">T</text>
      <text className="shortr-logo" x="100" y="16.6" fill="#de4431">R</text>
      <text ref={r1} className="shortr-logo" x="120" y="16.6" r="16.1" fill="#de4431">R</text>
      <text ref={r2} className="shortr-logo" x="140" y="16.6" r="16.1" fill="#de4431">R</text>
      <text ref={r3} className="shortr-logo" x="160" y="16.6" r="16.1" fill="#de4431">R</text>
      <text ref={r4} className="shortr-logo" x="180" y="16.6" r="16.1" fill="#de4431">R</text>
      <text className="shortr-subhead" x="0" y="40" fill="#de4431">Save characters and shorten your links:</text>
    </svg>
    </div>
  );
};

export default Animation;
