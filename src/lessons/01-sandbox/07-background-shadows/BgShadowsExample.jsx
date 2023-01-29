const BgShadowsExample = () => {
  return (
    <div>
      {/* Background Classes */}
      <div
        className="h-64 w-72 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../../../assets/img/img1.jpg')" }}
      ></div>

      {/* Gradients */}
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Shadows */}
      <div className="mt-6 ml-4 w-96 p-3 shadow-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-xl shadow-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-2xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-inner">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a neque
        odio ipsam, temporibus beatae laudantium eligendi quas pariatur, aliquam
        laborum voluptatum officiis molestias dolore aperiam cupiditate iure
        illum enim.
      </div>

      {/* Mix Blend */}
      <div className="flex justify-center -space-x-24">
        <div className="bg-blue-400 mix-blend-multiply">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quae nihil illo ad dolorum sequi, cumque minus quidem perferendis vel?
        </div>
        <div className="bg-pink-400 mix-blend-multiply">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quae nihil illo ad dolorum sequi, cumque minus quidem perferendis vel?
        </div>
      </div>
    </div>
  );
};

export default BgShadowsExample;
