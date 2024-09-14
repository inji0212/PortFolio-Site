// components/sections/Contact.tsx
"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:in22ji@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-6xl font-bold mb-10 text-center">CONTACT ME</h2>

      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-fuchsia-600 focus:border-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        ></textarea>
        <button
          type="submit"
          className="bg-fuchsia-500 text-white px-4 py-2 rounded hover:bg-fuchsia-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
