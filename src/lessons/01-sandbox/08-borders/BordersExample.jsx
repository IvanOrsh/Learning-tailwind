const BordersExample = () => {
  return (
    <div>
      {/* Border Width & Colors */}
      <div className="m-3 w-96 border p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>

      <div className="m-3 w-96 border-2 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>

      <div className="m-3 w-96 border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>

      <div className="m-3 w-96 border-4 border-red-500 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>

      <div className="m-3 w-96 border-x-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>
      <div className="m-3 w-96 border-t-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>
      <div className="m-3 w-96 border-b-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>
      <div className="m-3 w-96 border-r-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo
        veniam ut excepturi soluta odio. Iure accusamus facere laboriosam dolore
        rerum quaerat recusandae hic natus, odit harum, iusto maiores dolores.
      </div>

      {/* Border Radius */}
      <div className="m-3 w-96 rounded border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae
        possimus a earum sint molestias quae deleniti fugit, architecto animi
        itaque voluptatibus excepturi quos odit. Adipisci explicabo odio
        mollitia. Veritatis.
      </div>
      <div className="m-3 w-96 rounded-lg border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae
        possimus a earum sint molestias quae deleniti fugit, architecto animi
        itaque voluptatibus excepturi quos odit. Adipisci explicabo odio
        mollitia. Veritatis.
      </div>
      <div className="m-3 w-96 rounded-2xl border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae
        possimus a earum sint molestias quae deleniti fugit, architecto animi
        itaque voluptatibus excepturi quos odit. Adipisci explicabo odio
        mollitia. Veritatis.
      </div>
      <div className="m-3 w-96 rounded-full border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae
        possimus a earum sint molestias quae deleniti fugi. Adipisci explicabo
        odio mollitia. Veritatis.
      </div>
      <div className="m-3 w-96 rounded-t-full border-4 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime beatae
        possimus a earum sint molestias quae deleniti fugi. Adipisci explicabo
        odio mollitia. Veritatis.
      </div>

      {/* Outline */}
      <button className="outline outline-4 outline-offset-2 outline-red-500">
        Click
      </button>
    </div>
  );
};

export default BordersExample;
