import { useEffect } from "react";

const useOutsideClickListener = (ref, onOutsideClick) => {
  useEffect(() => {
    /**
     * Run onOutsideClick if click is outside element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClickListener;
