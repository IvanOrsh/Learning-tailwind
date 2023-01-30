import { useEffect, useState } from "react";

const BreakpointsExample = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="h-96 bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-red-800">
      <h1 className="pt-48 text-center text-xl text-slate-300 md:text-3xl xl:text-5xl">
        Width: {width}
      </h1>
    </div>
  );
};

export default BreakpointsExample;
