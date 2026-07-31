import { useState, useEffect } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return width;
}


function WindowSize() {
  const width = useWindowSize();

  return (
    <>
      <h2>Window Width</h2>
      <h3>{width}px</h3>
    </>
  );
}

export default WindowSize;