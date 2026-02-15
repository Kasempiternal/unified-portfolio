"use client";

const images = [
  { id: 1, color: "#cd7f32", label: "Front View" },
  { id: 2, color: "#8b5a3c", label: "Side Profile" },
  { id: 3, color: "#d4af37", label: "Caseback Detail" },
  { id: 4, color: "#a67b5b", label: "Crown Detail" },
  { id: 5, color: "#b8860b", label: "Dial Close-up" },
  { id: 6, color: "#9b7653", label: "On Wrist" },
];

export default function ProductGallery() {
  return (
    <section className="py-24 px-6 bg-charcoal-950 text-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Gallery
          </h2>
          <p className="text-xl text-cream-300 max-w-2xl mx-auto">
            Explore every detail of exceptional craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg"
            >
              <div
                className="aspect-square transition-transform duration-500 group-hover:scale-110 flex items-center justify-center"
                style={{ backgroundColor: image.color }}
              >
                <span className="text-2xl font-display font-bold text-white/80">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
