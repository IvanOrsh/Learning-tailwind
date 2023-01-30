import Image from "./Image";
import { images } from "./some-hardcoded-stuffs";

const ImageGallery = () => {
  return (
    // Global Container
    <div className="flex min-h-screen items-center justify-center bg-cyan-50">
      {/* Card Container */}
      <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40">
        {/* Menu Container */}
        {/* ============================================ */}
        <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-y-0 md:space-x-8">
          {/* Menu Item */}
          <div className="group">
            <a href="not going anywhere">Vector</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Menu Item */}
          <div className="group">
            <a href="not going anywhere">Illustrations</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Menu Item */}
          <div className="group">
            <a href="not going anywhere">Images</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Menu Item */}
          <div className="group">
            <a href="not going anywhere">Icons</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
        </div>
        {/* ========================================================= */}

        {/* Search Container  */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* input and svg container */}
          <div className="flex justify-between border-b">
            <input
              className="ml-6 border-none placeholder:font-thin focus:outline-none md:w-80"
              type="text"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>

          {/* Upload Button */}
          <button className="rounded-md border border-black bg-black py-3 px-14 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        {/* ===================================== */}

        {/* Gallery */}
        <div className="lg:grid-col-4 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          {images.map((image) => (
            <Image
              key={image.id}
              title={image.title}
              url={image.url}
              likes={image.likes}
              shares={image.shares}
            />
          ))}
        </div>
        {/* ====================================== */}
      </div>
    </div>
  );
};

export default ImageGallery;
