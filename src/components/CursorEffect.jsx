import React, { useEffect } from "react";
import "./CursorEffect.scss";

const CursorEffect = () => {
  useEffect(() => {
    const updateCursorPosition = (e) => {
      const circle = document.querySelector(".circle");
      const dot = document.querySelector(".dot");

      if (circle && dot) {
        circle.style.top = `${e.clientY - 25}px`;
        circle.style.left = `${e.clientX - 25}px`;

        dot.style.top = `${e.clientY - 5}px`;
        dot.style.left = `${e.clientX - 5}px`;
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div>
      <div className="cursor-follow">
        <div className="circle">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default CursorEffect;
