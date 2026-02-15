"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg font-light text-black/60">
            Let&apos;s create something beautiful together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light tracking-tight mb-4">Email</h3>
              <a
                href="mailto:hello@elenavoss.com"
                className="text-base font-light text-black/60 hover:text-black transition-colors"
              >
                hello@elenavoss.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-tight mb-4">Studio</h3>
              <p className="text-base font-light text-black/60 leading-relaxed">
                123 Gallery District
                <br />
                New York, NY 10013
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-tight mb-4">Follow</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors font-light"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors font-light"
              />
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors font-light"
              >
                <option value="">Select a Service</option>
                <option value="portrait">Portrait Photography</option>
                <option value="wedding">Wedding Photography</option>
                <option value="commercial">Commercial & Editorial</option>
                <option value="prints">Fine Art Prints</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors font-light resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white font-light tracking-wider uppercase hover:bg-black/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
