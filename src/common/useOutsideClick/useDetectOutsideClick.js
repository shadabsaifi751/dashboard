import { useState, useEffect, useRef } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const elRef = el;

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (elRef.current && !elRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    // If the item is active (i.e., open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive]);

  return [isActive, setIsActive, elRef];
};
