import { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  });

  const [imageSrc, setImgSrc] = useState("");

  // Use effect enables display of diffrent images based on the screen's width
  useEffect(
    function () {
      function handleResize() {
        const windowSize = window.innerWidth;
        if (windowSize < 375) {
          setImgSrc(`/bg-mobile-${isDark === true ? "dark" : "light"}.jpg`);
        } else {
          setImgSrc(`/bg-desktop-${isDark === true ? "dark" : "light"}.jpg`);
        }
      }
      handleResize();
      /*Listen for resize event */
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [isDark]
  );

  return (
    <div className="grid grid-rows-[1fr_2fr] min-h-dvh relative overflow-y-auto">
      <div className="header">
        <img src={imageSrc} alt="img" className=" w-full h-full" />
      </div>
      <div className="dark:bg-Very-Dark-Blue bg-Very-Light-Gray "></div>

      <TodoContainer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
