const GridExample = () => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-6 gap-2 bg-gray-200 md:grid-cols-3">
        <div className="row-span-2 border border-blue-600 bg-blue-100 p-10 md:col-span-2">
          Item 1
        </div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 2</div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 3</div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 4</div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 5</div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 6</div>
        <div className="border border-blue-600 bg-blue-100 p-10 md:col-span-2">
          Item 7
        </div>
        <div className="border border-blue-600 bg-blue-100 p-10">Item 8</div>
        <div className="border border-blue-600 bg-blue-100 p-10 md:col-span-3">
          Item 9
        </div>
      </div>
    </>
  );
};

export default GridExample;
