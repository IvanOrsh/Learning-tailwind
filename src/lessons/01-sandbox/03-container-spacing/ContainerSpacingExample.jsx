const ContainerSpacingExample = () => {
  return (
    <div className="container mx-auto">
      <article>
        <h3>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam libero molestiae recusandae accusantium
          voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
          sunt, maiores quasi. Modi amet quos dolores!
        </p>
      </article>

      {/* Margin */}
      <div className="m-2 bg-slate-100">Hello</div>
      <div className="ml-4 bg-slate-100">Hello</div>
      <div className="mr-4 bg-slate-100">Hello</div>
      <div className="mt-4 bg-slate-100">Hello</div>
      <div className="mb-4 bg-slate-100">Hello</div>
      <div className="mt-[20px] bg-slate-100">Hello</div>

      {/* Padding */}
      <div className="bg-slate-100 p-2">Hello</div>
      <div className="bg-slate-100 pl-4">Hello</div>
      <div className="bg-slate-100 pr-4">Hello</div>
      <div className="bg-slate-100 pt-4">Hello</div>
      <div className="bg-slate-100 pb-4">Hello</div>
      <div className="bg-slate-100 pt-[20px]">Hello</div>

      {/* Space Between X */}
      <div className="mt-24 flex space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>

      {/* Space Between Y */}
      <div className="mt-24 flex flex-col space-y-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
    </div>
  );
};

export default ContainerSpacingExample;
