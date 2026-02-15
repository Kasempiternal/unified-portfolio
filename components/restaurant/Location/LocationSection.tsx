'use client';

import React from 'react';

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-burgundy mb-4">Visit Us</h2>
            <div className="divider"></div>
            <p className="text-lg text-burgundy/70 max-w-2xl mx-auto">
              Located in the heart of San Francisco, we welcome you to
              experience culinary excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=123+Culinary+Boulevard+San+Francisco+CA+94102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Maison Rouge Location"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-burgundy/5 rounded-lg p-8 border border-burgundy/10">
                <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">
                        Address
                      </h4>
                      <p className="text-burgundy/70">
                        123 Culinary Boulevard
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:4155550123"
                        className="text-burgundy/70 hover:text-gold transition-colors"
                      >
                        (415) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:info@lamaisonrouge.com"
                        className="text-burgundy/70 hover:text-gold transition-colors"
                      >
                        info@lamaisonrouge.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-burgundy/5 rounded-lg p-8 border border-burgundy/10">
                <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">
                  Hours of Operation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-burgundy/70">Monday</span>
                    <span className="font-semibold text-burgundy">Closed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-burgundy/70">
                      Tuesday - Thursday
                    </span>
                    <span className="font-semibold text-burgundy">
                      5:00 PM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-burgundy/70">
                      Friday - Saturday
                    </span>
                    <span className="font-semibold text-burgundy">
                      5:00 PM - 11:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-burgundy/70">Sunday</span>
                    <span className="font-semibold text-burgundy">
                      4:00 PM - 9:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
