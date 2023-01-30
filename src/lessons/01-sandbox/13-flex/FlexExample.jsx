const FlexExample = () => {
  return (
    <>
      {/* Flex and Alignment */}
      <div className="flex h-72 w-full flex-wrap items-center justify-between bg-gray-100">
        <div className="border border-blue-300 bg-blue-100 p-10">01</div>
        <div className="border border-blue-300 bg-blue-100 p-10">02</div>
        <div className="border border-blue-300 bg-blue-100 p-10">03</div>
        <div className="border border-blue-300 bg-blue-100 p-10">04</div>
        <div className="border border-blue-300 bg-blue-100 p-10">05</div>
        <div className="border border-blue-300 bg-blue-100 p-10">06</div>
        <div className="border border-blue-300 bg-blue-100 p-10">07</div>
        <div className="border border-blue-300 bg-blue-100 p-10">08</div>
      </div>

      {/* Flex Column, Gap and Order */}
      <div className="flex h-72 w-full flex-col items-center justify-between gap-4 bg-gray-100">
        <div className="order-3 border border-blue-300 bg-blue-100 p-10">
          01
        </div>
        <div className="order-2 border border-blue-300 bg-blue-100 p-10">
          02
        </div>
        <div className="order-4 border border-blue-300 bg-blue-100 p-10">
          03
        </div>
        <div className="order-1 border border-blue-300 bg-blue-100 p-10">
          04
        </div>
      </div>

      {/* Grow and shrink */}
      <div className="flex w-full bg-gray-100">
        <div className="w-64 flex-initial border border-blue-300 bg-blue-100 p-10">
          01
        </div>
        <div className="w-64 flex-none border border-blue-300 bg-blue-100 p-10">
          02
        </div>
        <div className="w-64 flex-auto border border-blue-300 bg-blue-100 p-10">
          03
        </div>
        <div className="w-64 flex-1 border border-blue-300 bg-blue-100 p-10">
          04
        </div>
        <div className="w-64 border border-blue-300 bg-blue-100 p-10">05</div>
        <div className="w-64 border border-blue-300 bg-blue-100 p-10">06</div>
        <div className="w-64 border border-blue-300 bg-blue-100 p-10">07</div>
        <div className="w-64 border border-blue-300 bg-blue-100 p-10">08</div>
      </div>
    </>
  );
};

export default FlexExample;
