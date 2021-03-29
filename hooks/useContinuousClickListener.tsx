import { useEffect } from "react";

const useContinuousClickListener = (ref, onMouseDown, onMouseUp = (...args) => {}) => {
  useEffect(() => {
    // Bind the event listener
    let interval;
    const downHandler = (...args) => {
      interval = setInterval(() => onMouseDown(...args), 100);
    };
    const upHandler = (...args) => {
      clearInterval(interval);
      onMouseUp(...args);
    };
    document.addEventListener("mousedown", downHandler);
    document.addEventListener("mouseup", upHandler);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", downHandler);
      document.removeEventListener("mouseup", upHandler);
    };
  }, [ref]);
};

export default useContinuousClickListener;
