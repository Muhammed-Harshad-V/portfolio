import Link from 'next/link';

const Contact = () => {
  return (

      <div className="flex flex-col items-center justify-center bg-black font-mono p-5 h-[90svh]">
      <div className="font-mono sm:p-5 lg:p-8 rounded-[30px] bg-[#000000] z-20 flex items-center justify-center flex-col text-white mt-10">
          <h1 className="sm:text-3xl xl:text-4xl font-bold mb-4">
            Contact Me
          </h1>
          <h2 className="sm:text-md md:text-xl xl:text-2xl font-semibold mb-2 text-center">
            I'd love to hear from you!
          </h2>
          <p className="sm:text-sm lg:text-lg mb-4 text-center">
            If you have any questions, ideas, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <form className="flex flex-col w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
            required
          />
          <textarea
            placeholder="Your Message"
            className="bg-transparent border border-retroWhite text-retroWhite mb-4 px-4 py-2 rounded-xl focus:outline-none focus:ring-0 focus:border-retroOrange"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-retroOrange text-white font-bold py-2 px-6 rounded-xl mb-10 hover:bg-retroOrangeDark transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center mt-4">
          <Link href="/projects">
            <p className="text-white mb-3 text-sm">
              <span>[</span><span className='hover:text-retroOrange'>All Projects</span><span>]</span>
            </p>
          </Link>
          <Link href="/">
            <p className="text-white text-sm">
              <span>[</span><span className='hover:text-retroOrange'>Home</span><span>]</span>
            </p>
          </Link>
        </div>
      </div>
  );
};

export default Contact;    // emailjs
