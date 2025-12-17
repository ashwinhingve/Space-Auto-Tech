"use client"
import Image from 'next/image';
import Link from 'next/link';
// import { useEffect } from 'react';

export default function profile() {
  return (
    <>

      <div className='h-24'></div>
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-100 to-indigo-50">
        {/* Header Section with Cool, Attractive Styles
   <h1 className="text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 mb-10 transform hover:scale-110 transition duration-300 ease-in-out shadow-2xl">
          Space Automation
        </h1> */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
            src="/assets/icon.png"
            width={720}
            height={600}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-5xl text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              About <span className="text-indigo-600">SPACE AUTOMATION</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-700">
              Welcome to <span className="font-semibold text-indigo-500">SPACE AUTOMATION</span>! We are a passionate team dedicated to delivering innovative solutions and unparalleled value. Our journey started with a vision to make a positive impact, and we have been thriving ever since. We believe in quality, trust, and building meaningful relationships with our customers.
            </p>
            <div className="flex justify-center">
              <Link
                href="../components/contect/"
                className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Contact Us
              </Link>
              <Link
                href="/#s3"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* bg-gradient-to-r from-purple-600 via-indigo-800 to-blue-900 */}
      <div className="font-inter m-0 p-0">
        {/* Body with Elegant Gradient Background */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-50 min-h-screen flex flex-col items-center justify-center text-center text-white">

          <hr className="w-24 mx-auto border-t-4 border-pink-500 mb-12" />

          {/* About Us Section with Larger Size */}
          <section className="fade-in bg-gradient-to-r from-teal-600 via-blue-700 to-indigo-700 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content (Left Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">
                  About Us
                </h2>
                <p className="text-xl mb-6 text-gray-200">
                  <span>
                    Established on <strong>September 29, 2024</strong>, Space Automation is a leader in providing energy-efficient automation solutions for solar energy, irrigation automation, smart homes, and more.
                  </span>
                </p>
                <p className="text-xl text-gray-200">
                  Our commitment to sustainability and innovation drives us to deliver intelligent, reliable solutions worldwide.
                </p>
              </div>
              {/* Image Content (Right Side) */}
              <div className="md:w-1/2 ml-4  mt-8 md:mt-0">
                <Image src="/images/about-us.jpg" alt="About Us" width={300} height={500} className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>

          {/* Our Mission Section with Larger Size */}
          <section className="fade-in bg-gradient-to-r from-purple-600 via-pink-700 to-red-700 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row-reverse items-center">
              {/* Text Content (Right Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-500">
                  Our Mission
                </h2>
                <p className="italic text-2xl text-gray-200">
                  Our mission is to revolutionize industries and improve lives by leveraging automation and renewable energy, promoting global productivity and sustainability.
                </p>
              </div>
              {/* Image Content (Left Side) */}
              <div className="md:w-1/2 mt-8 mr-4 md:mt-0">
                <Image src="/images/mission.jpg" alt="Our Mission" width={300} height={500} className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>

          {/* Our Vision Section with Larger Size */}
          <section className="fade-in bg-gradient-to-r from-cyan-600 via-teal-700 to-blue-800 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 relative overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content (Left Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  Our Vision
                </h2>
                <p className="italic text-2xl text-gray-200">
                  To be a global leader in automation, blending advanced technology with sustainability to create harmony between tech and nature.
                </p>
              </div>
              {/* Image Content (Right Side) */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src="/images/vision.jpg" alt="Our Vision" width={300} height={500} className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>

          {/* Our Values Section with Larger Size */}
          <section className="fade-in bg-gradient-to-r from-green-600 via-teal-600 to-cyan-700 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row-reverse items-center">
              {/* Text Content (Right Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-500">
                  Our Values
                </h2>
                <ul className="list-disc pl-6 text-2xl text-gray-200 space-y-6">
                  <li><strong>Innovation</strong>: We strive for constant innovation, embracing new technologies.</li>
                  <li><strong>Sustainability</strong>: We are committed to eco-friendly solutions.</li>
                  <li><strong>Customer-Centric</strong>: Our clients are at the heart of everything we do.</li>
                  <li><strong>Integrity</strong>: We believe in doing business with honesty and transparency.</li>
                </ul>
              </div>
              {/* Image Content (Left Side) */}
              <div className="md:w-1/2 mt-8 mr-5 md:mt-0">
                <Image src="/images/values.jpg" alt="Our Values" width={300} height={500} className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>

          {/* Our Founders Section with Larger Size */}
          <section className="fade-in bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-800 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content (Left Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                  Our Founders
                </h2>
                <p className="text-xl text-gray-200">
                  Space Automation was founded by <strong>Ganesh Deshmukh</strong> and, both passionate about leveraging technology for positive change in the world.
                </p>
              </div>
              {/* Image Content (Right Side) */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src="/images/founders1.jpg" width={300} height={500} alt="Our Founders" className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>

          {/* Contact Section with Larger Size */}
          <section id="contact" className="fade-in bg-gradient-to-r from-teal-500 via-blue-600 to-cyan-700 p-12 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-3/5 mt-12 transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row-reverse items-center">
              {/* Text Content (Right Side) */}
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  Contact Us
                </h2>
                <ul className="list-none pl-0 text-2xl text-gray-200">
                  <li><strong>Email</strong>: <a href="mailto:spaceautomation29@gmail.com" className="text-blue-300 hover:text-blue-500">spaceautomation29@gmail.com</a></li>
                  <li><strong>Phone</strong>: <a href="tel:+91 81206 84036" className="text-blue-300 hover:text-blue-500">+91 12345 67890</a></li>
                  <li><strong>Website</strong>: <a href="https://spacesautomation.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">https://spacesautomation.com</a></li>
                </ul>
              </div>
              {/* Image Content (Left Side) */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src="/images/contact.jpg" alt="Contact Us" width={300} height={500} className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </section>
          <div className='h-10'></div>
        </div>
      </div>
      
    </>






  )
}