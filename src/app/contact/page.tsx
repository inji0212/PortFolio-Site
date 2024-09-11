// app/contact/page.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-8">
      <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
        <h2 className="text-2xl font-semibold text-fuchsia-500 mb-4">
          Contact Me
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 rounded border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-2 rounded border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-2 rounded border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-fuchsia-500 text-white py-2 rounded hover:bg-fuchsia-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
