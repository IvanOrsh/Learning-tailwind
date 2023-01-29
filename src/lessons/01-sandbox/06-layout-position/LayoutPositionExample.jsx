const LayoutPositionExample = () => {
  return (
    <div>
      {/* Positioning */}
      <div className="relative h-12 w-1/2 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* Top left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom left corner */}
      <div className="relative h-32 w-32 bg-blue-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-blue-300"></div>
      </div>

      {/* Bottom right corner */}
      <div className="relative h-32 w-32 bg-green-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-green-300"></div>
      </div>

      {/* Span top edge */}
      <div className="relative h-32 w-32 bg-pink-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-pink-300"></div>
      </div>

      {/* Span left edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span right edge */}
      <div className="relative h-32 w-32 bg-blue-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-blue-300"></div>
      </div>

      {/* Span bottom edge */}
      <div className="relative h-32 w-32 bg-green-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-blue-300"></div>
      </div>

      {/* Display classes */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        laudantium perspiciatis itaque voluptatem voluptas reprehenderit,
        pariatur nulla reiciendis{" "}
        <span className="inline font-bold">
          assumenda eaque cupiditate eos fuga
        </span>
        unde quos. Animi impedit officiis sit pariatur, similique dolores modi
        est.
        <span className="inline-block font-bold">Fugit quidem illo</span> totam
        eius voluptas. Sapiente rem, reiciendis doloremque modi cumque, maiores
        <span className="block font-bold">excepturi facilis culpa </span>{" "}
        assumenda veritatis unde est et{" "}
        <span className="hidden">perspiciatis</span> quidem. Architecto,
        adipisci impedit.
      </div>

      {/* Z-index */}
      <div className="relative h-36">
        <div className="absolute left-10 z-40 h-24 w-24 bg-blue-300">1</div>
        <div className="absolute left-20 h-24 w-24 bg-blue-400">2</div>
        <div className="absolute left-40 z-10 h-24 w-24 bg-blue-500">3</div>
        <div className="absolute left-60 z-20 h-24 w-24 bg-blue-600">4</div>
        <div className="absolute left-80 z-30 h-24 w-24 bg-blue-700">5</div>
      </div>

      {/* Floats */}
      <div className="w-1/2">
        <img
          className="float-left m-4 h-48 w-48"
          src="../../../assets/img/img1.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ut
          officia maxime esse, minus libero blanditiis harum facere quod est
          quisquam iusto qui ipsum illo iure sed? Officiis, cupiditate qui!
        </p>
      </div>
    </div>
  );
};

export default LayoutPositionExample;
