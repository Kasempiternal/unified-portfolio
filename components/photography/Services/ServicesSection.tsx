"use client";

const services = [
  {
    title: "Portrait Photography",
    description:
      "Professional portrait sessions that capture your unique personality and essence. From corporate headshots to creative personal portraits.",
    icon: "👤",
  },
  {
    title: "Wedding Photography",
    description:
      "Timeless wedding photography that tells your love story. Comprehensive coverage from preparation to reception with a photojournalistic approach.",
    icon: "💍",
  },
  {
    title: "Commercial & Editorial",
    description:
      "High-impact commercial photography for brands and editorial features. Bringing creative vision to advertising campaigns and magazine spreads.",
    icon: "📸",
  },
  {
    title: "Fine Art Prints",
    description:
      "Limited edition fine art prints available for collectors. Museum-quality printing on archival paper with certificate of authenticity.",
    icon: "🖼️",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Services
          </h2>
          <p className="text-lg font-light text-black/60 max-w-2xl mx-auto">
            Specialized photography services tailored to your vision and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-light tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-base font-light text-black/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
