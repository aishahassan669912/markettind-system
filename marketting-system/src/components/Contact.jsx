import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you. Reach out for questions, feedback, or partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              📍 Nairobi, Kenya
            </p>
            <p className="text-gray-700 mb-2">
              📞 +254 705311598
            </p>
            <p className="text-gray-700 mb-2">
              ✉️ support@marketpro.com
            </p>
            <p className="text-gray-700 mt-4">
              Our team will respond within 24 hours. We’re here to help your marketing succeed.
            </p>
            <p className="text-gray-600 mt-6 italic">
              — Aisha, Marketing System Creator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
