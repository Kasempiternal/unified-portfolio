"use client";

const models = [
  {
    name: "Signature Collection",
    price: "$3,200",
    movement: "ETA 2824-2",
    waterResistance: "200m",
    crystal: "Sapphire",
    strap: "Leather",
    current: true,
  },
  {
    name: "Heritage Edition",
    price: "$4,500",
    movement: "ETA 2892-A2",
    waterResistance: "300m",
    crystal: "Sapphire",
    strap: "Steel Bracelet",
    current: false,
  },
  {
    name: "Limited Edition",
    price: "$6,800",
    movement: "Sellita SW300",
    waterResistance: "300m",
    crystal: "Sapphire",
    strap: "Titanium Bracelet",
    current: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Compare Collections
          </h2>
          <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
            Find the perfect timepiece for your style
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-charcoal-900">
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Model
                </th>
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Price
                </th>
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Movement
                </th>
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Water Resistance
                </th>
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Crystal
                </th>
                <th className="text-left py-4 px-6 font-display text-lg font-bold text-charcoal-950">
                  Strap
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => (
                <tr
                  key={index}
                  className={`border-b border-charcoal-200 ${
                    model.current
                      ? "bg-bronze-50"
                      : "hover:bg-cream-50 transition-colors"
                  }`}
                >
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-charcoal-900">
                        {model.name}
                      </span>
                      {model.current && (
                        <span className="text-xs bg-bronze-500 text-white px-2 py-1 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-6 text-charcoal-700 font-medium">
                    {model.price}
                  </td>
                  <td className="py-6 px-6 text-charcoal-700">
                    {model.movement}
                  </td>
                  <td className="py-6 px-6 text-charcoal-700">
                    {model.waterResistance}
                  </td>
                  <td className="py-6 px-6 text-charcoal-700">
                    {model.crystal}
                  </td>
                  <td className="py-6 px-6 text-charcoal-700">{model.strap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
