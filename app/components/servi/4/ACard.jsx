import Image from 'next/image';


const ACard = () => {
  return (
    <>
      <section>
        <div id="3" className="e-con-inner bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 shadow-xl transform transition-transform hover:scale-105">
          <div className="flex respo items-center justify-center space-x-8">
            {/* Image Section */}
            <div className=" w-80 pr-5 pl-5 md:pr-6 pt-1 md:pt-8 md:pl-2">
                <Image
                  src="/svg/ind4.gif"
                  alt="IoT Gateway"
                  width={500}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="w-80 pl-3">
              <div className="elementor-widget-container">
                <h2 className="text-4xl font-extrabold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
                About Us: Pioneering Solutions for the Industrial Sector
                </h2>
              </div>

              {/* Description Section */}
              <div className="elementor-widget-container">
                <div style={{ color: '#ffffff' }}>
                  <p className="text-lg mb-6">
                  We are a forward-thinking company committed to transforming industries through innovative technologies and sustainable practices. 
                  </p>
                  <span className="text-teal-300 text-xl pt-3 pb-3">Features:</span>
                  <br />
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Effortless Watering"
                      width={18}
                      height={21}
                    />
                    <span>Industry Expertise</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Low Maintenance"
                      width={18}
                      height={21}
                    />
                    <span>End-to-End Services</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Long Lifespan"
                      width={18}
                      height={10}
                    />
                    <span>Cutting-Edge Technology</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Smart Irrigation Solutions"
                      width={18}
                      height={21}
                    />
                    <span>Customer-Centric Approach</span>
                  </div>
                </div>
              </div>

              {/* Button Section */}
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm bg-teal-600 text-white rounded-full px-8 py-4 shadow-xl hover:bg-teal-700 transform transition-all duration-300"
                    href="https://spacesautomation.com"
                  >
                    <span className="elementor-button-content-wrapper flex items-center gap-2">
                      <span className="elementor-button-text">Read more</span>
                      <Image
                        decoding="async"
                        src="/assets/icon.png"
                        className="btnarrow"
                        alt="arrow"
                        width={16}
                        height={16}
                        unoptimized
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Design for Smaller Screens */}
          <style jsx>{`
    @media (max-width: 768px) {
      .respo {
        flex-direction: column;
      }
    }
  `}</style>
        </div>
      </section></>
  );
};

export default ACard;
