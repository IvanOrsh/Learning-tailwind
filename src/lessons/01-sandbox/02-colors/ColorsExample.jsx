const ColorsExample = () => {
  return (
    <div>
      {/* default colors */}
      {/* white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber */}

      {/* Text Colors */}
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-white">Tailwind is awesome</p>
      <p className="text-red-500">Tailwind is awesome</p>
      <p className="text-green-500">Tailwind is awesome</p>
      <p className="text-emerald-500">Tailwind is awesome</p>
      <p className="text-zinc-500">Tailwind is awesome</p>
      <p className="text-slate-500">Tailwind is awesome</p>

      {/* Background Colors */}
      <p className="bg-black text-yellow-200">Tailwind is awesome</p>
      <p className="bg-white">Tailwind is awesome</p>
      <p className="bg-red-500">Tailwind is awesome</p>
      <p className="bg-green-500">Tailwind is awesome</p>
      <p className="bg-emerald-500">Tailwind is awesome</p>
      <p className="bg-zinc-500">Tailwind is awesome</p>
      <p className="bg-slate-500 text-white">Tailwind is awesome</p>

      {/* Text Underline */}
      <p className="underline decoration-red-300">Tailwind is awesome</p>
      <p className="underline decoration-emerald-600">Tailwind is awesome</p>
      <p className="underline decoration-yellow-800">Tailwind is awesome</p>

      {/* Border Color */}
      <input type="text" className="border border-blue-400" />
      <input type="text" className="border border-green-400" />
      <input type="text" className="border border-orange-400" />

      {/* Divide Colors */}
      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline Colors */}
      <button className="outline outline-red-500">Hello</button>
      <button className="outline outline-blue-200">Hello</button>

      {/* Box Shadow Colors (Opacity defaults to 100, but we can set it) */}
      <button className="shadow-lg bg-cyan-500 shadow-cyan-500">
        Subscribe
      </button>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500/80">
        Subscribe
      </button>

      {/* Accent Colors */}
      <input type="checkbox" className="accent-purple-500" checked />
      <input type="checkbox" className="accent-cyan-500" checked />

      {/* Arbitrary Colors */}
      <div className="bg-[#427fab]">Hello</div>
      <div className="bg-[rgb(255,0,0)]">Hello</div>
      <div className="bg-[steelblue]">Hello</div>
    </div>
  );
};

export default ColorsExample;
