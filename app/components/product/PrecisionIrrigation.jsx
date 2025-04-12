
"use client";
import Image from 'next/image';
 
import "@/app/components/product/page.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

export default function profile() {
   
  const products = [
    // {
    //   title: "Drippers and Dripperlines",
    //   description:
    //     "The most critical part of your precision irrigation system. Learn about the innovation behind the world’s most clog-resistant drippers and dripperlines that are trusted by millions of farmers for more than 50 years.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/demo/products-and-solutions/dripper_1.jpg",
    
    // },
    // {
    //   title: "Sprinklers, micro sprinklers and special emitters",
    //   description:
    //     "To grow uniformly better crops, you need a uniform distribution of water. Find out how to get more effective germination, healthy crop growth, frost mitigation, and cooling or humidification for your crops.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/demo/products-and-solutions/sprinklers_1.jpg",
    //   link: "/products-and-solutions/product-offering/sprinkler-irrigation-product/",
    // },
    // {
    //   title: "Filters",
    //   description:
    //     "Protect your irrigation system from even the harshest water conditions. Learn about the innovations making sand media, screen, disc, and hydro-cyclone filters more durable, simple, and reliable.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/demo/products-and-solutions/filters_1.jpg",
    //   link: "/products-and-solutions/product-offering/filters/",
    // },
    // {
    //   title: "Valves",
    //   description:
    //     "The gatekeepers of your precision irrigation system. Find out how the right valves make your life simpler by reliably controlling flow rates and pressure, and allowing you to automate your system’s operation.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/products/valves_white_452.jpg",
    //   link: "/products-and-solutions/product-offering/valves/",
    // },
    // {
    //   title: "Flexible and PE pipes",
    //   description:
    //     "The right pipes do more than move water. They’re lighter, tougher, easier to use, and they connect more intelligently to the rest of your irrigation system.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/demo/products-and-solutions/pipes_1.png",
    //   link: "/products-and-solutions/product-offering/flexible-and-pe-pipes-old/",
    // },
    // {
    //   title: "Connectors",
    //   description:
    //     "The most reliable connectors are the ones you trust to stay in place and last longer. They’re made from premium materials, are easy to install, and based on a design that keeps them in place, even under pressure.",
    //   image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=400,/globalassets/demo/products-and-solutions/connectors_1.jpg",
    //   link: "/products-and-solutions/product-offering/connectors/",
    // },
  ];

        return (
            <div className="c-component is-boxed" id="generic-overview">
              <div className="o-wrapper">
                <section className="o-container-block ">
                  <div className="o-container-block__heading">
                    <div className="c-rich-text">
                      <p className=' text-3xl text-center mt-5 m-5'>SPACE AUTOMATION irrigation product offering</p>
                      <p className=' text-2xl m-5 '>
                        Driven by the specific needs of growers from around the world,
                        our innovative products are designed to give you increased
                        accuracy, control, and uniformity. Across the range. From system
                        heads to connectors. So you can grow better yields every year.
                      </p>
                    </div>
                  </div>
                  <div className="o-container-block__wrapper">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      spaceBetween={15}
                      slidesPerView={3}
                    >
                      {products.map((product, index) => (
                        <SwiperSlide key={index}>
                          <article className="o-card m-card m-card--blog-article">
                            <div className="o-card__obj-wrapper">
                              <div className="o-ratio o-ratio--3:2">
                                <Image
                                  className="o-fit"
                                  src={product.image}
                                  alt={product.title}
                                />
                              </div>
                            </div>
                            <div className="o-card__body-wrapper">
                              <h3 className="o-card__title p-3 text-slate-800">{product.title}</h3>
                              <div className="o-card__body p-3">
                                <p>{product.description}</p>
                              </div>
                              <div className="o-card__footer">
                                <a
                                  href={product.link}
                                  className="c-btn c-btn--secondary"
                                >
                                  See the range
                                </a>
                              </div>
                            </div>
                          </article>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </section>
              </div>
            </div>
          );
}