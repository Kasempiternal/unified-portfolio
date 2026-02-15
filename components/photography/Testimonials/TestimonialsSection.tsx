"use client";

/* eslint-disable react/no-unescaped-entities */
const testimonials = [
  {
    quote:
      "Elena's eye for composition and light is unparalleled. She captured our wedding day in a way that felt both timeless and intimate. Every image tells a story.",
    author: "Sarah & Michael Chen",
    role: "Wedding Clients",
  },
  {
    quote:
      "Working with Elena on our brand campaign was transformative. Her editorial vision elevated our product photography to an art form. Truly exceptional work.",
    author: "Marcus Rodriguez",
    role: "Creative Director, Lumen Studios",
  },
  {
    quote:
      "The portrait session with Elena was unlike any other. She made me feel completely at ease and the results were stunning—images that I'll treasure forever.",
    author: "Olivia Martinez",
    role: "Portrait Client",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            What clients say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-white/10">
              <div className="text-4xl mb-6 text-white/40">"</div>
              <p className="text-base font-light leading-relaxed mb-6 text-white/90">
                {testimonial.quote}
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-light tracking-wide">{testimonial.author}</p>
                <p className="text-sm font-light text-white/50 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
