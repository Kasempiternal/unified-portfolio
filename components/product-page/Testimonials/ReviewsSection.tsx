"use client";

/* eslint-disable react/no-unescaped-entities */
const reviews = [
  {
    name: "James Morrison",
    rating: 5,
    date: "January 2026",
    review:
      "Absolutely stunning timepiece. The attention to detail is remarkable, and the movement is incredibly accurate. Best watch purchase I've ever made.",
  },
  {
    name: "Sarah Chen",
    rating: 5,
    date: "December 2025",
    review:
      "The craftsmanship is exceptional. I've received countless compliments, and it wears beautifully on the wrist. Worth every penny.",
  },
  {
    name: "Michael Rodriguez",
    rating: 5,
    date: "December 2025",
    review:
      "This watch exceeded my expectations. The sapphire crystal is flawless, and the automatic movement is mesmerizing to watch through the caseback.",
  },
  {
    name: "Emily Watson",
    rating: 5,
    date: "November 2025",
    review:
      "Elegant, precise, and built to last. The leather strap is incredibly comfortable, and the deployant clasp is a nice touch.",
  },
  {
    name: "David Park",
    rating: 5,
    date: "November 2025",
    review:
      "A true heirloom piece. The finishing on the case is impeccable, and I love the subtle sunray dial. This will be passed down for generations.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-8 h-8 fill-bronze-500"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-xl text-charcoal-700">
            4.9 out of 5 stars from 247 reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-bronze-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-charcoal-500">{review.date}</span>
              </div>
              <p className="text-charcoal-700 mb-4 leading-relaxed">
                "{review.review}"
              </p>
              <p className="font-semibold text-charcoal-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
