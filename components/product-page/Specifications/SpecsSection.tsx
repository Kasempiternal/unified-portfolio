"use client";

const specifications = [
  {
    category: "Movement",
    specs: [
      { label: "Caliber", value: "ETA 2824-2 Automatic" },
      { label: "Jewels", value: "25 Jewels" },
      { label: "Power Reserve", value: "38 Hours" },
      { label: "Frequency", value: "28,800 vph" },
      { label: "Accuracy", value: "+/-2 seconds/day" },
    ],
  },
  {
    category: "Case",
    specs: [
      { label: "Material", value: "316L Stainless Steel" },
      { label: "Diameter", value: "40mm" },
      { label: "Thickness", value: "11.5mm" },
      { label: "Crystal", value: "Sapphire with AR coating" },
      { label: "Water Resistance", value: "200 meters" },
    ],
  },
  {
    category: "Dial & Hands",
    specs: [
      { label: "Dial Color", value: "Charcoal Sunray" },
      { label: "Hour Markers", value: "Applied Indices" },
      { label: "Hands", value: "Rhodium-plated" },
      { label: "Lume", value: "Super-LumiNova BGW9" },
      { label: "Date", value: "3 o'clock position" },
    ],
  },
  {
    category: "Strap & Clasp",
    specs: [
      { label: "Strap", value: "Italian Leather" },
      { label: "Width", value: "20mm" },
      { label: "Clasp", value: "Deployant Buckle" },
      { label: "Material", value: "Brushed Steel" },
    ],
  },
];

export default function SpecsSection() {
  return (
    <section className="py-24 px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
            Every detail engineered to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specifications.map((section) => (
            <div
              key={section.category}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-display text-2xl font-bold text-charcoal-950 mb-6 pb-3 border-b-2 border-bronze-500">
                {section.category}
              </h3>
              <dl className="space-y-4">
                {section.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <dt className="text-charcoal-600 font-medium">
                      {spec.label}
                    </dt>
                    <dd className="text-charcoal-900 font-semibold text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
