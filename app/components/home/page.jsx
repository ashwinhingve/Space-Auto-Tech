
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { useRef, useCallback, useEffect, useState } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Carousel = () => {
  

  const slides = [
    'images/image1.jpg',
    'assets/solar.png',
    'images/image3.jpg',
    'images/solar.jpg',
    'images/image4.jpg',
  ];
  const services = [
    {
      id: 1,
      title: "Solar energy",
      description:
        " Harness the power of the sun with our innovative solar energy solutions! Designed for efficiency and sustainability, our product transforms sunlight into clean, renewable energy, reducing your carbon footprint and cutting energy costs",
      imageSrc: "images/service4.jpg",
      Link: `components/servi/2`
    },
    {
      id: 2,
      title: "Irrigation and Water Automation",
      description:
        "At SPACE AUTOMATION, our commitment to the Water Sector is unwavering. We play a pivotal role in addressing the critical aspects of water supply for drinking water and irrigation.",
      imageSrc: "images/service1.jpg", // Add this image to the `public` folder
      Link: `components/servi/1`,

    },
    {
      id: 3,
      title: "Devlopment",
      description:
        "Our Web devlopment involves a combination of programming, design, and problem-solving skills to build functional, user-friendly, and visually appealing digital platforms that operate on the internet.",
      imageSrc: "images/service61.jpg",
      Link: `components/servi/6`
    },
    {
      id: 4,
      title: "Home Automation",
      description:
        "Home automation refers to the use of technology to control and manage various aspects of a home environment remotely or automatically. appliances to create a smart and efficient living space.",
      imageSrc: "images/service7.jpg",
      Link: `components/servi/7`
      // Link: `../components/servi/`
    },
    {
      id: 5,
      title: "Power Sector",
      description:
        "In the Power Sector, SPACE AUTOMATION cutting-edge Remote Terminal Units (RTUs) and controllers play a pivotal role in revolutionizing energy management.",
      imageSrc: "images/servive21.jpg",
      // Link: `../components/Coming`
      Link: `components/servi/3`
    },
    {
      id: 6,
      title: "Industrial Sector",
      description:
        "In the dynamic landscape of the Industrial Sector, SPACE AUTOMATION cutting-edge Remote Terminal Units (RTUs) and controllers redefine operational efficiency.",
      imageSrc: "images/ind5.jpg",
      // Link: `../components/Coming`
      Link: `components/servi/4`
    },

    {
      id: 7,
      title: "Railway Sector",
      description:
        " In the evolving realm of Railways, SPACE AUTOMATION leads with technological innovation. Our solutions are instrumental in optimizing railway operations, providing precise control,",
      imageSrc: "images/rail.webp",
      // Link: `../components/Coming`
      Link: `components/servi/5`

    },
    {
      id: 8,
      title: "IoT Sector",
      description:
        "IoT Solutions Company specializing in seamless device connectivity, real-time data processing, and smart automation. We provide secure and scalable platforms for managing IoT networks, enabling industries to optimize operations, enhance efficiency, and drive innovation.",
      imageSrc: "images/iot.jpg",
      // Link: `../components/Coming`
      Link: `components/servi/5`

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
    // Automatic sliding with interval
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000);
    // Cleanup on component unmount
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  const box1Ref = useRef()
  const box2Ref = useRef()
  const box3Ref = useRef()
  // const box4Ref = useRef() ref={box4Ref} id='s4'

  // useEffect(
  //   () => {
  //     gsap.fromTo(box3Ref.current, { opacity: 0,
  //       delay: 1,
  //       duration: 0.7,
  //       stagger: 0.2,
  //       scale: 0.3, }, { opacity:1, scrollTrigger: {
  //       trigger:box2Ref.current, 
  // }})
  //   },
  //   [],
  // )


  useGSAP(() => {
    gsap.from("#s1 #default-carousel", {
      opacity: 0,
      delay: 1,
      duration: 0.7,
      stagger: 0.2,
      scale: 0.3,
    },);

    gsap.from("#s2 .f1 h2,#s2 .f1 #text,#s2 .f2", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.2,
    },);;
    gsap.from("#box p", {
      y: -30,
      opacity: 0.1,
      duration: 0.7,
      stagger: 0.2,
    },)
    // gsap.from("#s3 .container #boxes #box .img", {
    //   rotation: 720,
    //   scale: 0,
    //   opacity: 0,
    //   duration: 0.7,
    //   scrollTrigger: {
    //     trigger: '#boxes',
    //     scroller: 'window',
    //     markers: true,
    //     start: 'top 60%',
    //   }
    // },),

  }
  );

  // useGSAP(() => {
  //   gsap.from("#s1 #default-carousel", {
  //     opacity: 0,
  //     delay: 1,
  //     duration: 0.7,
  //     stagger: 0.2,
  //     scale: 0.3,
  //   });

  //   gsap.from("#s2 .f1 h2,#s2 .f1 #text,#s2 .f2", {
  //     y: 30,
  //     opacity: 0,
  //     delay: 0.5,
  //     duration: 0.5,
  //     stagger: 0.2,
  //   });

  //   gsap.from("h2", {
  //     y: -30,
  //     opacity: 0,
  //     duration: 0.7,
  //   });

  //   gsap.from("#box p", {
  //     y: -30,
  //     opacity: 0.1,
  //     duration: 0.7,
  //     stagger: 0.2,
  //   });


  //   // gsap.from("#s3 .container .img", {
  //   //   rotation: 720,
  //   //   scale: 0,
  //   //   opacity: 0,
  //   //   duration: 0.7,
  //   //   scrollTrigger: {
  //   //     trigger: '#boxes',
  //   //     scroller: 'window',
  //   //     markers: true,
  //   //     start: 'top 60%',
  //   //   }
  //   // });
  // });


  return (
    <>
      
      <section className='pt-3'>
        <section ref={box1Ref} id="s1" className="mb-5">
          <div id="default-carousel" className="relative w-full">
            {/* Carousel Wrapper */}
            <div className="relative h-56 overflow-hidden rounded-xl md:h-96 shadow-lg hover:shadow-2xl transition-all duration-500">
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-lg object-center"
                  />
                </div>
              ))}
            </div>

            {/* Slider Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${activeIndex === index ? 'bg-teal-500 scale-110' : 'bg-gray-400 scale-100'}`}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Slider Controls */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 hover:bg-transparent hover:scale-105 transition-all duration-300"
              aria-label="Previous"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 group-hover:bg-transparent group-focus:ring-4 group-focus:ring-teal-300">
                <svg
                  className="w-6 h-6 text-teal-600 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1L1 5l4 4"
                  />
                </svg>
              </span>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 hover:bg-transparent hover:scale-105 transition-all duration-300"
              aria-label="Next"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 group-hover:bg-transparent group-focus:ring-4 group-focus:ring-teal-300">
                <svg
                  className="w-6 h-6 text-teal-600 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 9l4-4-4-4"
                  />
                </svg>
              </span>
            </button>
          </div>

        </section>
        <section ref={box2Ref} id="s2" className="relative bg-gradient-to-r from-teal-500 to-blue-500 py-12 rounded-xl mt-5">
          <div className="container mx-auto flex flex-wrap justify-center gap-10 px-6">

            {/* Left Section - About Our Company */}
            <div className="max-w-4xl bg-white shadow-xl rounded-lg p-8 text-center transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2">
              <h2 className="font-bold text-3xl text-orange-700 mb-6 text-gradient bg-clip-text">
                WHY SPACE AUTOMATION ?
              </h2>
              <div id="text" className="text-lg text-gray-800 leading-relaxed mb-6">
                <span className="font-bold text-cyan-400">SPACE AUTOMATION </span>
                <span>
                  stands at the forefront of IoT innovation, specializing in cutting-edge communication devices that transcend global boundaries. Infused with the timeless values of India, we are dedicated to revitalizing the nation&apos;s esteemed legacy as the Golden Bird. Beyond technology, our mission is to contribute to a brighter future by simplifying and enriching lives. Join us on this journey, where professionalism meets a profound respect for tradition, setting new standards in the world of innovative connectivity solutions.
                </span>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-white font-semibold text-lg px-8 py-4 bg-teal-600 rounded-full hover:bg-teal-700 transition-all transform hover:scale-105 hover:translate-x-2"
              >
                Read More
                <Image
                  decoding="async"
                  src="/assets/icon.png"
                  alt="Arrow Icon"
                  className="ml-2 w-6 h-6 transform transition-transform hover:translate-x-2"
                  width={24}
                  height={24}
                  layout="intrinsic"
                />
              </a>
            </div>

            {/* Right Section - Testimonial / Description */}
            <div className="max-w-2xl bg-white shadow-xl rounded-lg p-8 text-center mt-12 lg:mt-0 transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-16 h-16 text-teal-500 mb-6 animate-bounce" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                SPACE AUTOMATION Solutions is a pioneering company at the forefront of industrial and digital automation, dedicated to transforming businesses through innovative, intelligent systems. We specialize in designing and implementing advanced automation solutions that optimize processes, enhance productivity, and reduce operational costs across various industries, including manufacturing, automation, agriculture, and energy.
              </p>
              <span className="inline-block h-1 w-20 bg-indigo-500 mb-8"></span>
              <h2 className="text-gray-900 text-xl font-medium mb-2">GANESH DESHMUKH</h2>
              <p className="text-gray-500 text-md">Managing Director</p>
            </div>
          </div>
        </section>
        <section ref={box3Ref} id='s3' className=" py-10">
          <h2 className="font-extrabold text-4xl text-center text-teal-600 mb-6 relative group">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-25 rounded-md blur-xl group-hover:opacity-50 transition-all"></span>
            <span className="relative z-10 text-shadow-xl group-hover:text-teal-800 transition-all duration-300">Featured</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </h2>


          <div className="container mx-auto px-4">
            <div id="boxes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div id="box"
                  key={service.id}
                  className="bg-white shadow-md rounded-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="img mb-4 relative w-full h-56">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="mx-auto object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  {/* <svg class="animate-bounce w-6 h-6 ..."></svg> */}
                  {/* <Link href={`${service.Link}`} className="text-gray-700 relative hover:text-teal-600 pb-5 mb-5"><button className="bg-blue-500 m-5 rounded hover:border-blue-500 text-white hover:text-sky-500  hover:bg-slate-50 " >Discover!</button> </Link> */}
                  {/* animate-pulse transform   */}
                  <Link href={`${service.Link}`} className="relative">
                    <button
                      className="
      bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
      text-white font-bold uppercase 
      py-2 px-5 m-4 rounded-full 
      shadow-xl shadow-purple-500/50 
      hover:from-red-500 hover:via-pink-500 hover:to-purple-600 
      hover:text-yellow-300 
      hover:shadow-2xl hover:shadow-red-500/70 hover:scale-110
      transition duration-500 ease-out
    "
                    >
                      🚀 Discover Now!
                    </button>
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  )
};

export default Carousel;







