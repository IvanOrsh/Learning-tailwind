const SizingExample = () => {
  return (
    <div>
      {/* Width */}
      <div className="w-12 bg-black text-white">Hello</div>
      <div className="w-96 bg-black text-white">Hello</div>

      {/* Percentages */}
      <div className="w-1/4 bg-green-700 text-white">Hello</div>
      <div className="w-1/3 bg-green-700 text-white">Hello</div>
      <div className="w-1/2 bg-green-700 text-white">Hello</div>

      {/* Width of the viewport */}
      <div className="w-screen bg-blue-500 text-white">Hello</div>

      {/* 100% of container */}
      <div className="w-full bg-blue-300 text-white">Hello</div>

      {/* Arbitrary width */}
      <div className="w-[300px] bg-blue-700 text-white">Hello</div>

      {/* Max width */}
      <div className="mx-auto max-w-sm bg-gray-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        ipsam aspernatur atque. Blanditiis obcaecati architecto et eum facere
        excepturi accusantium ratione, maiores aut, vero fuga mollitia nam
        aperiam voluptates itaque.
      </div>

      {/* Height */}
      <div className="flex items-end">
        <div className="h-24 w-20 bg-orange-500">ello-ello</div>
        <div className="h-32 w-20 bg-orange-500">ello-ello</div>
        <div className="h-40 w-20 bg-orange-500">ello-ello</div>
        <div className="h-48 w-20 bg-orange-500">ello-ello</div>
        <div className="h-64 w-20 bg-orange-500">ello-ello</div>
        <div className="h-96 w-20 bg-orange-500">ello-ello</div>
      </div>

      {/* Full screen height */}
      <div className="h-screen bg-blue-300 text-white">Hello</div>
    </div>
  );
};

export default SizingExample;
