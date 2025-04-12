'use client'
// import Image from 'next/image';
import { useState } from 'react';
export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  }
  return (
    <>
      <div className='h-20'></div>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
              <span className="text-indigo-600">Contact</span> Us
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed max-w-2xl">
              Have questions or need assistance? Feel free to reach out to us via the form below
              or through the provided contact information. We&apos;re here to help!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="#contact-form"
                className="inline-block text-white bg-indigo-500 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out"
              >
                Contact Form
              </a>
              <p className="text-gray-600 text-sm text-center">
                Or email us at{" "}
                <a href="mailto:support@spaceautomation.com" className="text-indigo-500 font-medium hover:underline">
                info@spacesautomation.com
                </a>
              </p>
            </div>
          </div>
        </section>


        {/* Contact Form */}
        <section id='contact-form' className="text-gray-600 body-font bg-gradient-to-b from-gray-100 to-white">
          <div className="container px-5 py-12 mx-auto">
            <h2 className="text-4xl font-bold title-font text-gray-900 text-center mb-8 tracking-wide">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-center text-gray-700 mb-10 leading-relaxed">
              We&apos;d love to hear from you! Fill out the form below, and we&apos;ll get back to you as soon as possible.
            </p>
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col mb-6">
                <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>


        {/* Office Address */}
        <section className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100 py-16">
          <div className="container px-5 mx-auto">
            <h2 className="text-4xl font-bold title-font text-gray-900 text-center mb-10 tracking-wide">
              Our <span className="text-blue-600">Office</span>
            </h2>
            <div className="flex flex-wrap justify-center -m-4">
              <div className="p-4 w-full md:w-1/2 lg:w-1/3">
                <div className="h-full bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Address</h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Ashoka Garden, <br />
                    Bhopal, M.P., <br />
                    ZIP Code, India
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:contact@yourdomain.com"
                        className="text-blue-600 hover:underline"
                      >
                      info@spacesautomation.com
                      </a>
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+1234567890"
                        className="text-blue-600 hover:underline"
                      >
                        +123 456 7890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="text-gray-600 body-font bg-gray-50 py-16">
          <div className="container px-5 mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-10 tracking-wide">
              Locate <span className="text-blue-600">Us</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                className="w-full h-72 md:h-96 transition-transform transform hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.666402745495!2d77.41975480057718!3d23.255216314178938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d7cf48696f%3A0xddbc57014db35da2!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734869252106!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
            <p className="text-center text-gray-700 text-lg mt-6">
              Visit us at our location in <strong>Ashoka Garden, Bhopal, Madhya Pradesh</strong>.
              We&apos;re always here to assist you!
            </p>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="text-gray-600 body-font bg-gray-50 py-16">
          <div className="container px-5 mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-wide">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <div className="flex flex-wrap -m-4">
              {[
                { question: "What services do you offer?", answer: "We provide innovative solutions, including automation, AI-driven tools, and more tailored to your needs." },
                { question: "How can I contact support?", answer: "You can reach us via email at support@spaceautomation.com or through our Contact Us page." },
                { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee on eligible purchases. Please contact support for more details." },
              ].map((faq, index) => (
                <div key={index} className="p-4 w-full md:w-1/3">
                  <div className="h-full bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <h3 className="text-lg font-semibold text-blue-600 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
