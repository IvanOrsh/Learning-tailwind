import PricingCard from "./PricingCard";

const someFakeStuffs = [
  // basic
  {
    id: 0,
    name: "basic",
    price: 1.99,
    space: 100,
    recommended: false,
    features: [
      {
        id: 0,
        description: "100GB of storage",
      },
      {
        id: 1,
        description: "option to add members",
      },
      {
        id: 2,
        description: "extra member benefits",
      },
    ],
  },

  // standard
  {
    id: 1,
    name: "standard",
    price: 3.99,
    space: 200,
    recommended: true,
    features: [
      {
        id: 0,
        description: "200GB of storage",
      },
      {
        id: 1,
        description: "option to add members",
      },
      {
        id: 2,
        description: "extra member benefits",
      },
    ],
  },

  // premium
  {
    id: 2,
    name: "premium",
    price: 8.99,
    space: 2000,
    recommended: false,
    features: [
      {
        id: 0,
        description: "2000GB of storage",
      },
      {
        id: 1,
        description: "option to add members",
      },
      {
        id: 2,
        description: "extra member benefits",
      },
    ],
  },
];

const PricingGrids = () => {
  return (
    // Global Container
    <div className="flex min-h-screen items-center justify-center bg-slate-800">
      <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-y-0 md:space-x-6">
        {someFakeStuffs.map((item) => (
          <PricingCard
            key={item.id}
            name={item.name}
            price={item.price}
            recommended={item.recommended}
            space={item.space}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingGrids;
