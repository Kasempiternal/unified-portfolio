'use client';

import React, { useState } from 'react';

export default function ReservationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert(
      'Thank you! Your reservation request has been received. We will contact you shortly to confirm.'
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="reservations" className="section-padding bg-burgundy text-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Reserve Your Table</h2>
            <div className="divider !bg-gold"></div>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience. Reservations are
              recommended, especially for weekend evenings.
            </p>
          </div>

          <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gold/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                    placeholder="(415) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-semibold mb-2"
                  >
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="9+">9+ Guests (Call Required)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-semibold mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-semibold mb-2"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                             focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-semibold mb-2"
                >
                  Special Requests or Dietary Restrictions
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream text-burgundy rounded-sm border-2 border-cream/20
                           focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Please let us know of any allergies, dietary restrictions, or special occasions..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="btn-primary !bg-gold !text-burgundy hover:!bg-gold-light w-full sm:w-auto"
                >
                  Request Reservation
                </button>
                <p className="text-sm text-cream/70">
                  Or call us at{' '}
                  <a
                    href="tel:4155550123"
                    className="text-gold hover:underline font-semibold"
                  >
                    (415) 555-0123
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
