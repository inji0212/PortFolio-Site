"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify 스타일 추가

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_MAIL_USER_ID as string
      )
      .then(() => {
        toast.success("메일 전송에 성공하였습니다.", {
          position: "top-center", // 문자열로 직접 위치 지정

          hideProgressBar: true,
          className: "toast-message",
        });
        setFormData({ name: "", email: "", message: "" }); // 폼 초기화
      })
      .catch(() => {
        toast.error("메일 전송에 실패하였습니다.", {
          position: "top-center", // 문자열로 직접 위치 지정
          hideProgressBar: true,
          className: "toast-message",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-6xl font-bold mb-10 text-center">CONTACT ME</h2>
      <form ref={formRef} className="max-w-md w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-fuchsia-600"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-fuchsia-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-fuchsia-600"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-fuchsia-500 text-white px-4 py-2 rounded hover:bg-fuchsia-700 transition"
        >
          Send Message
        </button>
      </form>
      {/* ToastContainer 추가 */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
