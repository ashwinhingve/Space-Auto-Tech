"use client"
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useCallback, useEffect, useState } from 'react';

const Carousel = () => {
  const slides = [
    '/images/image1.jpg',
    '/assets/solar.png',
    '/images/image3.jpg',
    '/images/solar.jpg',
    '/images/image4.jpg',
  ];
  
  const services = [
    {
      id: 1,
      title: "Solar Energy Solutions",
      description: "Harness the power of the sun with our innovative solar energy solutions. Transform sunlight into clean, renewable energy, reducing your carbon footprint and cutting energy costs with cutting-edge technology.",
      imageSrc: "/images/service4.jpg",
      Link: `components/servi/2`,
      icon: "☀️"
    },
    {
      id: 2,
      title: "Irrigation & Water Automation",
      description: "Advanced water management systems for agriculture and industrial use. Our smart irrigation solutions optimize water usage with precision monitoring and automated control systems.",
      imageSrc: "/images/service1.jpg",
      Link: `components/servi/1`,
      icon: "💧"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Custom web development solutions combining programming excellence, modern design, and problem-solving to build functional, user-friendly digital platforms that drive your business forward.",
      imageSrc: "/images/service61.jpg",
      Link: `components/servi/6`,
      icon: "💻"
    },
    {
      id: 4,
      title: "Smart Home Automation",
      description: "Transform your living space with intelligent home automation. Control lighting, climate, security, and appliances remotely for enhanced comfort, efficiency, and peace of mind.",
      imageSrc: "/images/service7.jpg",
      Link: `components/servi/7`,
      icon: "🏠"
    },
    {
      id: 5,
      title: "Power Sector Solutions",
      description: "Revolutionary Remote Terminal Units (RTUs) and controllers for modern energy management. Monitor, control, and optimize power distribution with real-time analytics and automation.",
      imageSrc: "/images/servive21.jpg",
      Link: `components/servi/3`,
      icon: "⚡"
    },
    {
      id: 6,
      title: "Industrial Automation",
      description: "Advanced RTUs and controllers that redefine operational efficiency in industrial environments. Streamline processes, reduce downtime, and maximize productivity with intelligent automation.",
      imageSrc: "/images/ind5.jpg",
      Link: `components/servi/4`,
      icon: "🏭"
    },
    {
      id: 7,
      title: "Railway Technology",
      description: "Leading-edge technological solutions for railway operations. Our systems provide precise control, real-time monitoring, and enhanced safety for modern rail infrastructure.",
      imageSrc: "/images/rail.webp",
      Link: `components/servi/5`,
      icon: "🚄"
    },
    {
      id: 8,
      title: "IoT Solutions",
      description: "Enterprise IoT platform for seamless device connectivity, real-time data processing, and smart automation. Secure, scalable solutions that optimize operations and drive innovation.",
      imageSrc: "/images/iot.jpg",
      Link: `/iot`,
      icon: "🌐"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();

  useGSAP(() => {
    gsap.from("#s1 #default-carousel", {
      opacity: 0,
      delay: 1,
      duration: 0.7,
      stagger: 0.2,
      scale: 0.3,
    });

    gsap.from("#s2 .content-card", {
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.3,
    });

    gsap.from("#box", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    });
  });

  return (
    <>
      <section className='pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white'>
        
        {/* Hero Carousel Section */}
        <section ref={box1Ref} id="s1" className="mb-20 px-4 md:px-8">
          <div id="default-carousel" className="relative w-full max-w-7xl mx-auto" role="region" aria-label="Image carousel">
            {/* Carousel Wrapper with Glassmorphism Effect */}
            <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Hero Text Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center px-6">
                  <h1 className="text-4xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                    Innovation in <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Automation</span>
                  </h1>
                  <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
                    Empowering the future with intelligent IoT solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Slider Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`transition-all duration-500 rounded-full ${
                    activeIndex === index 
                      ? 'w-12 h-3 bg-gradient-to-r from-teal-400 to-blue-500' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Minimalist Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 z-30 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
              aria-label="Previous"
            >
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 z-30 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
              aria-label="Next"
            >
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* About Section with Modern Cards */}
        <section ref={box2Ref} id="s2" className="relative py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Why Choose Us Card */}
              <div className="content-card group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-block mb-6">
                    <h2 className="font-black text-4xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      WHY SPACE AUTO TECH?
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-600 mt-3 rounded-full"></div>
                  </div>
                  
                  <div className="text-gray-700 text-lg leading-relaxed mb-8 space-y-4">
                    <p>
                      <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Space Auto Tech</span> stands at the forefront of IoT and automation innovation, delivering cutting-edge solutions that transcend industry boundaries.
                    </p>
                    <p>
                      We combine advanced technology with unwavering commitment to excellence, helping businesses and individuals embrace the future of connected systems. Our mission is to simplify complexity, enhance efficiency, and drive sustainable growth through intelligent automation.
                    </p>
                    <p className="text-base text-gray-600">
                      Join us on this transformative journey where innovation meets reliability, setting new standards in automation technology.
                    </p>
                  </div>

                  <a href="/components/profile" className="group/btn inline-flex items-center gap-3 text-white font-semibold text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Testimonial Card with Modern Design */}
              <div className="content-card relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16 text-teal-400 mb-8 opacity-50" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  
                  <p className="text-xl leading-relaxed text-gray-200 mb-10">
                    Space Auto Tech is a pioneering force in industrial and digital automation, transforming businesses through innovative, intelligent systems. We design and implement advanced automation solutions that optimize processes, enhance productivity, and reduce operational costs across manufacturing, agriculture, energy, and smart infrastructure sectors.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">GANESH DESHMUKH</h3>
                      <p className="text-teal-400 font-medium">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Modern Grid */}
        <section ref={box3Ref} id='s3' className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-black text-5xl md:text-6xl mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Our Solutions</span>
              </h2>
              <div className="flex justify-center">
                <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                Comprehensive automation solutions tailored for the modern enterprise
              </p>
            </div>

            {/* Services Grid */}
            <div id="boxes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  id="box"
                  key={service.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Link href={`${service.Link}`} className="block">
                      <button className="w-full group/btn relative overflow-hidden py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Learn More
                          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </button>
                    </Link>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Carousel;