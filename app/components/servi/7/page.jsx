import Image from 'next/image';
import Link from 'next/link';
import Tabs from '@/app/components/servi/7/Tabs';
const irrigationData = [
    {
      id: 1,
      title: "What is home automation?",
      description:
        "Home automation refers to the use of smart devices and systems to control and automate household functions such as lighting, temperature, security, and entertainment. It allows for remote management, voice commands, and scheduling for enhanced convenience and efficiency.",
      listItems: ["Improve living standard"],
      link: "",
      imageSrc:"/images/home4.jpg",
    },
    {
      id: 2,
      title: "How does home automation work?",
      description:
        "Home automation works through interconnected devices that communicate over Wi-Fi, Bluetooth, or other protocols. These devices are managed through a central hub, smartphone app, or voice assistant, enabling users to control and monitor them remotely or automatically.",
      listItems: ["Improved energy efficiency", "Time savings"],
      link: "#",
      imageSrc: "/images/home11.jpg",
    },
    {
      id: 3,
      title: "Is home automation secure?",
      description:
        "Home automation can be secure if proper measures are taken, such as using strong passwords, regularly updating firmware, and enabling encryption. Choosing reputable brands and devices with security certifications also helps.",
      listItems: ["Increased convenience","Enhanced security"],
      link: "#",
      imageSrc: "/images/home1.jpg" 
    },
  ];
  
  const IrrigationCards = () => {
    return (
      <section className="py-10 bg-gray-100">
      <div className='h-10'></div>
      <h1 className=' pt-10  font-extrabold text-2xl md:text-3xl lg:text-4xl text-center'>Revolutionize Your Living with Home Automation</h1>
      <p className="text-center font-poppins text-lg li- md:text-xl leading-loose p-5 md:p-10 lg:px-10 md:px-5 px-4 font-semibold">
      Simplify your daily life, enhance your security, and boost energy efficiency with cutting-edge smart technology. 
        <span className="bg-pink-500 border-none shadow-pink-500 rounded-sm shadow-lg font-semibold pl-2">
        Revolutionize Your Living with Home Automation by Step into the future with our advanced home automation solutions.
        </span>
      </p>
      <section className="px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mb-8 lg:mb-16 space-y-8 lg:space-y-0">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 pr-0 lg:pr-20">
            <Image
              src="/svg/home1.gif"
              alt="Solution Image"
              className="rounded-xl w-full max-w-md lg:max-w-none"
              width={600}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans leading-tight">
            About SPACE AUTOMATION Home automation product
            </h3>
            <ul className="text-lg sm:text-xl space-y-3 font-serif">
              <li>✅ Integration with IoT Devices.</li>
              <li>✅ Automation Scheduling.</li>
              <li>✅ Remote Access.</li>
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
  