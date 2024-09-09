// app/contact.tsx
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p>Email: yourname@example.com</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/yourusername
        </a>
      </p>
      <img
        src="/profile.jpg"
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mt-4"
      />
      <Link href="/" className="block mt-4 text-blue-500">
        Back to Portfolio
      </Link>
    </div>
  );
};

export default ContactPage;
