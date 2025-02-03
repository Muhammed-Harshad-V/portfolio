'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [buttonColor, setButtonColor] = useState("bg-retroOrange");

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonText("Loading...");
    setButtonColor("bg-gray-600 cursor-not-allowed");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    if (form.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        form.current?.reset();
        setButtonText("Sent!");
        setButtonColor("bg-green-600");
        setTimeout(() => {
          setButtonText("Send Message");
          setButtonColor("bg-retroOrange");
          setIsLoading(false);
          form.current?.reset();
        }, 3000);
      } catch (error) {
        console.error("Error sending email:", error);
        setButtonText("Failed!");
        setButtonColor("bg-red-600");
        setTimeout(() => {
          setButtonText("Send Message");
          setButtonColor("bg-retroOrange");
          setIsLoading(false);
        }, 3000);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendEmail(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black font-mono p-5 min-h-[90svh]">
      <div className="font-mono sm:p-5 lg:p-8 rounded-[30px] bg-[#000000] z-20 flex items-center justify-center flex-col text-white mt-10">
        <h1 className="sm:text-3xl xl:text-4xl font-bold mb-4">Contact Me</h1>
        <h2 className="sm:text-md md:text-xl xl:text-2xl font-semibold mb-2 text-center">
          I'd love to hear from you!
        </h2>
        <p className="sm:text-sm lg:text-lg mb-4 text-center">
          If you have any questions, ideas, or just want to say hi, feel free to reach out!
        </p>
      </div>

      <form ref={form} onSubmit={handleSendEmail} className="flex flex-col w-full max-w-lg">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
          rows={4}
          onKeyDown={handleKeyDown}
          required
        ></textarea>
        <button
          type="submit"
          className={`${buttonColor} text-white font-bold py-2 px-6 rounded-xl mb-10 transition duration-300 ${
            isLoading ? "cursor-not-allowed" : "hover:bg-retroOrangeDark"
          }`}
          disabled={isLoading}
        >
          {buttonText}
        </button>
      </form>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center mt-4">
        <Link href="/projects">
          <p className="text-white mb-3 text-sm">
            <span>[</span>
            <span className="hover:text-retroOrange">All Projects</span>
            <span>]</span>
          </p>
        </Link>
        <Link href="/">
          <p className="text-white text-sm">
            <span>[</span>
            <span className="hover:text-retroOrange">Home</span>
            <span>]</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
