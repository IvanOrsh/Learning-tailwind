const TransitionExample = () => {
  return (
    <>
      {/* No Transition */}
      <button className="m-24 rounded bg-blue-500 px-8 py-2 text-white hover:bg-blue-700">
        Click me
      </button>

      {/* Transition */}
      <button className="m-24 rounded bg-blue-500 px-8 py-2 text-white transition-all duration-1000 hover:bg-blue-700 hover:opacity-20">
        Click me
      </button>

      {/* Transition & Transform */}
      <button className="m-24 rounded bg-blue-500 px-8 py-2 text-white transition-transform duration-1000 hover:rotate-12 hover:bg-blue-700">
        Click me
      </button>

      <img
        className="w-48 transition duration-1000 hover:rotate-180 hover:skew-x-12 hover:scale-75"
        src="../../../assets/img/img1.jpg"
        alt=""
      />
    </>
  );
};

export default TransitionExample;
