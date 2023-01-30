import Feature from "./Feature";

const PricingCard = ({ name, space, price, recommended, features }) => {
  return (
    <div
      className={`rounded-xl text-white ${
        recommended ? "bg-violet-700" : "bg-slate-700"
      }`}
    >
      {/* Upper Container */}
      <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
        <div className="text-center uppercase">{name}</div>
        <h2 className="mt-10 text-center font-serif text-5xl">{space}GB</h2>
        <h3 className="mt-2 text-center">${price}/Month</h3>
        <div className="flex justify-center">
          <a
            href="invalid link"
            className={`my-6 inline-block ${
              recommended ? "bg-violet-600" : ""
            } rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800`}
          >
            Purchase
          </a>
        </div>
      </div>

      {/* Border */}
      <div className="border-t border-slate-700"></div>

      {/* Lower Container */}
      <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
        {/* List Container */}
        <div className="flex flex-col space-y-2">
          {/* Features? */}
          {features.map((feature) => (
            <Feature key={feature.id} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
