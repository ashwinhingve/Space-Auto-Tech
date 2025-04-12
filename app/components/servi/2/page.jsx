'use client'
import Image from 'next/image';
import Link from 'next/link';
import Tabs from '../2/Tabs';
// import ContentSecondPart from '@/app/components/servi/2/ContentSecondPart';
const irrigationData = [
  {
    id: 1,
    title: "Harnessing the Power of the Sun: The Future of Energy",
    description:
      "SPACE AUTOMATION Solar energy is revolutionizing the way we power our lives, offering a clean, renewable, and cost-effective solution to meet global energy needs. By harnessing sunlight, we can reduce carbon emissions and create a sustainable future for generations to come.",
    listItems: [],
    link: "#",
    imageSrc: "/images/solar2.webp",
  },
  {
    id: 2,
    title: " The Science Behind Solar Energy",
    description:
      "Solar energy transforms sunlight into electricity using advanced photovoltaic technology. It's a reliable and efficient way to produce energy while reducing dependency on fossil fuels and protecting our planet.",
    listItems: ["Efficient and Affordable", "Smart Solar Solutions for a Brighter Future"],
    link: "#",
    imageSrc: "/images/solar1.webp",
  },
  {
    id: 3,
    title: "Top Benefits of Switching to Solar Energy",
    description:
      "Discover the advantages of solar power, from significant cost savings on electricity bills to its environmental impact. Embrace energy independence and invest in a greener future today.",
    listItems: ["Power Your Home with the Sun"],
    link: "#",
    imageSrc: "/images/solar3.webp"
  },
];



const IrrigationCards = () => {
  return (
    <>
      <section className="py-10 bg-gray-100">
        <div className='h-10'></div>
        <h1 className=' pt-10  font-extrabold text-2xl md:text-3xl lg:text-4xl text-center'>Solar Energy Products: Powering a Sustainable Future</h1>
        <p className="text-center font-poppins text-lg li- md:text-xl leading-loose p-5 md:p-10 lg:px-10 md:px-5 px-4 font-semibold">
          Solar panels, also known as photovoltaic (PV) panels, are devices designed to convert sunlight into electricity.
          <span className="bg-orange-400 border-none shadow-orange-400 rounded-sm shadow-lg font-semibold pl-2">
            powering small gadgets to entire homes, businesses, and even large-scale solar farms.
          </span>
        </p>
        <section className="px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mb-8 lg:mb-16 space-y-8 lg:space-y-0">

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 pr-0 lg:pr-20">
              <Image
                src="/svg/solar2.gif"
                alt="Solution Image"
                className="rounded-xl w-full max-w-md lg:max-w-none"
                width={600}
                height={300}
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold font-sans leading-tight">
                About SPACE AUTOMATION Solar Energy
              </h3>
              <ul className="text-lg sm:text-xl space-y-3 font-serif">
                <li>✅ Renewable and Sustainable</li>
                <li>✅ Add widgets with drag-and-drop repositioning</li>
                <li>✅ Eco-Friendly</li>
              </ul>
              < Link
              href="../../api/feedback"
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
        <section className="text-gray-600 body-font bg-gradient-to-b from-gray-100 to-gray-300 py-16">
          <div className="container px-5 mx-auto">
            <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
              🌟 End-To-End Projects 🌟
            </h1>
            <div className="flex flex-wrap justify-evenly">
              {/* Card 1 */}
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
                <div className="relative h-60 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition duration-300">
                  <Image
                    alt="Solar Installation"
                    className="object-cover object-center w-full h-full border-4 border-transparent group-hover:border-blue-500 rounded-xl transition duration-300"
                    width={200}
                    height={200}
                    src="/images/sw1.jpg"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-blue-600 text-sm tracking-widest uppercase font-bold mb-1">
                    Installation
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium group-hover:text-blue-500 transition duration-300">
                    The Solar Panel
                  </h2>
                </div>
              </div>

              {/* Card 2 */}
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
                <div className="relative h-60 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition duration-300">
                  <Image
                    alt="Solar Work"
                    className="object-cover object-center w-full h-full border-4 border-transparent group-hover:border-green-500 rounded-xl transition duration-300"
                    width={200}
                    height={200}
                    src="/images/sw2.jpg"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-green-600 text-sm tracking-widest uppercase font-bold mb-1">
                    Work
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium group-hover:text-green-500 transition duration-300">
                    Fitting Stars
                  </h2>
                </div>
              </div>

              {/* Card 3 */}
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
                <div className="relative h-60 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition duration-300">
                  <Image
                    alt="Solar Construction"
                    className="object-cover object-center w-full h-full border-4 border-transparent group-hover:border-purple-500 rounded-xl transition duration-300"
                    width={200}
                    height={200}
                    src="/images/sw3.jpg"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-purple-600 text-sm tracking-widest uppercase font-bold mb-1">
                    Construction
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium group-hover:text-purple-500 transition duration-300">
                    Solar Roof
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <ContentSecondPart /> */}
      </section>
    </>
  );
};

export default IrrigationCards;
