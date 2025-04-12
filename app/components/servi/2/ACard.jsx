import Image from 'next/image';


const ACard = () => {
  return (
    <>
      <section>
        <div
          id="3"
          className="e-con-inner bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 shadow-xl transform transition-transform hover:scale-105"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Image Section */}
            <div className=" w-80 pr-5 pl-5 md:pr-6 pt-1 md:pt-8 md:pl-2">
                <Image
                  src="/svg/solar4.gif"
                  alt="IoT Gateway"
                  width={500}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                />
            
            </div>


            {/* Content Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-3">
              <div className="elementor-widget-container">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
                  Pioneering a Sustainable Future.
                </h2>
              </div>

              {/* Description Section */}
              <div className="elementor-widget-container">
                <div style={{ color: '#ffffff' }}>
                  <p className="text-lg mb-6">
                    One of the main advantages of solar energy is the potential for long-term savings on electricity bills.
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
                    <span>Secure &amp; Scalable.</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Low Maintenance"
                      width={18}
                      height={21}
                    />
                    <span>Low Maintenance</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Long Lifespan"
                      width={18}
                      height={10}
                    />
                    <span>Long Lifespan</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="https://waarta.waartaconnections.com/wp-content/uploads/2023/12/Ellipse-13-1.webp"
                      alt="Smart Irrigation Solutions"
                      width={18}
                      height={21}
                    />
                    <span>Solar Panels &amp; Solar Thermal</span>
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
        </div>
      </section>


    </>
  );
};

export default ACard;
