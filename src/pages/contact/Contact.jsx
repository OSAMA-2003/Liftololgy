/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 lg:px-16  text-gray-200">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className=" gradient_text font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Have questions or need help? Reach out to us and we'll get back to you as soon as possible!
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid lg:grid-cols-2 gap-12 my-5">
        {/* Left: Contact Form */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-200 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-200 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-200 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Our Contact Details</h2>
          <p className="text-gray-400 mb-4">
            Reach out to us via email, phone, or visit our office.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-200">Email</h3>
              <p className="text-gray-400">support@liftology.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-200">Phone</h3>
              <p className="text-gray-400">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-200">Address</h3>
              <p className="text-gray-400">
                123 Fitness Street, Health City, USA
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
