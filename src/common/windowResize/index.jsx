import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    let animationFrameId;

    function debouncedResize() {
      // Cancel any previously scheduled animation frame
      cancelAnimationFrame(animationFrameId);
      
      // Schedule a new animation frame to handle resize event
      animationFrameId = requestAnimationFrame(handleResize);
    }

    // Attach the debounced resize event listener
    window.addEventListener("resize", debouncedResize);
    
    // Initialize window size on initial mount
    handleResize();

    return () => {
      // Cleanup: remove event listener and cancel any scheduled animation frame
      window.removeEventListener("resize", debouncedResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;





// import { useState, useEffect } from "react";

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//   });

//   useEffect(() => {
//     let resizeTimeout;

//     function handleResize() {
//       clearTimeout(resizeTimeout);

//       resizeTimeout = setTimeout(() => {
//         setWindowSize({
//           width: window.innerWidth,
//         });
//       }, 100); // Adjust the debounce delay as needed (e.g., 100ms)

//     }

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       clearTimeout(resizeTimeout);
//     };
//   }, []);

//   return windowSize;
// }

// export default useWindowSize;
