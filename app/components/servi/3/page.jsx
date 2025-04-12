
'use client'
import Image from 'next/image';
import Link from 'next/link';
import Tabs from '@/app/components/servi/3/Tabs';

const irrigationData = [
    {
      id: 1,
      title: "Why is it important for the power sector",
      description:
        "Renewable energy refers to energy generated from natural sources that are replenished over time, such as sunlight, wind, and water.",
      listItems: ["improves grid stability"],
      link: "",
      imageSrc:"/images/power1.jpg"
    },
    {
      id: 2,
      title: "How does the smart grid benefit the power sector?",
      description:
        " A smart grid enhances the efficiency, reliability, and sustainability of electricity distribution by using digital technology to monitor and manage the flow of electricity. ",
      listItems: ["optimizing energy distribution", "forecasting energy demand"],
      link: "#",
      imageSrc: "/images/power2.jpg",
    },
    {
      id: 3,
      title: " What is the role of energy storage in the power sector?",
      description:
        " Energy storage solutions, like batteries, store excess energy generated during peak production times (e.g., sunny or windy periods) and release it when demand is high or generation is low.",
      listItems: ["EV charging infrastructure"],
      link: "#",
      imageSrc: "/images/power3.jpg" 
    },
  ];
  
  const IrrigationCards = () => {
    return (
      <section className="py-10 bg-gray-100">
      <div className='h-10'></div>
      <h1 className=' pt-10  font-extrabold text-2xl md:text-3xl lg:text-4xl text-center'>Empowering the Future: Sustainable Solutions for the Power Sector</h1>
      <p className="text-center font-poppins text-lg li- md:text-xl leading-loose p-5 md:p-10 lg:px-10 md:px-5 px-4 font-semibold">
      The power sector is at the heart of global development, driving progress through reliable, efficient, and sustainable energy solutions. As the industry evolves,
        <span className="bg-blue-400 border-none shadow-blue-400 rounded-sm shadow-lg font-semibold pl-2">
       We focuses on integrating renewable energy, enhancing grid infrastructure, and leveraging advanced technologies to meet the growing demand while protecting the environment.
        </span>
      </p>
      <section className="px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mb-8 lg:mb-16 space-y-8 lg:space-y-0">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 pr-0 lg:pr-20">
            <Image
              src="/svg/power1.gif"
              alt="Solution Image"
              className="rounded-xl w-full max-w-md lg:max-w-none"
              width={600}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans leading-tight">
              About SPACE AUTOMATION Power Sector
            </h3>
            <ul className="text-lg sm:text-xl space-y-3 font-serif">
              <li>✅ Decentralized Power Systems</li>
              <li>✅ Digital Transformation</li>
              <li>✅ Sustainability Goals</li>
            </ul>
            < Link
              href="../../components/inquiry"
              legacyBehavior
            >
              <a target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition">
                Inquiry
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          {irrigationData.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg p-6 w-80 transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-40 object-contain mb-4"
              />
              <h5 className="text-lg font-bold mb-2">{card.title}</h5>
              <p className="text-gray-700 text-sm mb-4">{card.description}</p>
              {card.listItems.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {card.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
               <a
                  href={card.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-all"
                >
                  View More
                </a>
            </div>
          ))}
        </div>
      </section>
      <Tabs />
    </section>
    );
  };
  
  export default IrrigationCards;
  