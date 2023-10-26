import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing) {
  const thisWindow = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (thisWindow.current && !thisWindow.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return { thisWindow };
}

export { useOutsideClick };
