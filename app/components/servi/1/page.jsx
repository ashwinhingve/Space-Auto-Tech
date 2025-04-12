'use client'
import Image from 'next/image';
import Tabs from '@/app/components/servi/1/Tabs';
import Link from 'next/link';

const irrigationData = [
  {
    id: 1,
    title: "What is SPACE AUTOMATION Irrigation",
    description:
      "SPACE AUTOMATION irrigation is a unique sustainable agricultural approach that allows the application of water and nutrients to the plant at the right time and place and in small measured doses in order to provide it with optimal growing conditions.",
    listItems: [],
    link: "",
    imageSrc: "https://www.agrivi.com/wp-content/uploads/2017/11/wepik-2022513-9459.jpg"
  },
  {
    id: 2,
    title: "Benefits Of Our Irrigation Product",
    description:
      "Irrigation is the science of precision, where every drop counts and efficiency matters. Precision irrigation system has many advantages.",
    listItems: ["Better water management", "Efficient soil protection"],
    link: "#",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQDnK12TUuo8Ad9yBZW6B5Cd32upgFxpBaQ&s",
  },
  {
    id: 3,
    title: "SPACE AUTOMATION Irrigation Methods And Their Management",
    description:
      "SPACE AUTOMATION irrigation systems deliver small amounts of water directly by utilising advanced technology. Water usage can be optimised with this irrigation method. Here watering and fertiliser can be combined to provide nutrients. By supplying water and nutrients at the right time, precision irrigation can promote a sustainable farming practice.",
    listItems: ["Precision irrigation system"],
    link: "#",
    imageSrc: "https://www.indiabusinesstrade.in/wp-content/uploads/2024/09/tpci-images-67.png"
  },
];

const IrrigationCards = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className='h-10'></div>
      <h1 className=' pt-10  font-extrabold text-2xl md:text-3xl lg:text-4xl text-center'></h1>
      <p className="text-center font-poppins text-lg li- md:text-xl leading-loose p-5 md:p-10 lg:px-10 md:px-5 px-4 font-semibold">
        Irrigation products are designed to manage and distribute water effectively to plants, crops, or landscapes.
        <span className="bg-green-400 border-none shadow-green-400 rounded-sm shadow-lg font-semibold pl-2">
          These products help conserve water, optimize agricultural productivity, and maintain healthy landscapes.
        </span>
      </p>
      <section className="px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mb-8 lg:mb-16 space-y-8 lg:space-y-0">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 pr-0 lg:pr-20">
            <Image
              src="/svg/water2.gif"
              alt="Solution Image"
              className="rounded-xl w-full max-w-md lg:max-w-none"
              width={600}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans leading-tight">
              About SPACE AUTOMATION Irrigation product
            </h3>
            <ul className="text-lg sm:text-xl space-y-3 font-serif">
              <li>✅ Grow More with Less Water.</li>
              <li>✅ Uniform water coverage.</li>
              <li>✅ Eco-Friendly.</li>
            </ul>
            < Link
              href="../../components/inquiry"
              legacyBehavior
            >
              <a target="_blank"
                // rel="noopener noreferrer"
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
