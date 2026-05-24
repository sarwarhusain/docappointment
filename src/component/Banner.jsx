"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full my-20">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter:true
        // }}
        speed={1000}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-111.5 md:h-140 lg:h-screen bg-cover  bg-center "
            style={{
              backgroundImage:
                "url('https://www.praavahealth.com/media/images/1.width-576.format-webp.webp')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-2xl font-bold md:text-5xl">
                  Healthcare Anytime, Anywhere
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  Let us take care of your health
                </p>
                <div className="flex gap-4">
                  <Link href={"/our-doctors"}>
                    {" "}
                    <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                      Book Appointment
                    </button>
                  </Link>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-111.5 md:h-140 lg:h-screen bg-cover  bg-center "
            style={{
              backgroundImage:
                "url('https://www.praavahealth.com/media/images/3.width-576.format-webp.webp')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-2xl font-bold md:text-5xl">
                  Affordable Health Checks & Packages Designed Just For Your
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  Square has designed health checks and packages tailored to
                  your needs, based on age and gender, that fit within your
                  budget
                </p>
                <div className="flex gap-4">
                  <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                    Explore More
                  </button>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-100 md:h-100 lg:h-screen bg-cover  bg-center "
            style={{
              backgroundImage:
                "url('https://www.praavahealth.com/media/images/2.width-576.format-webp.webp')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-2xl font-bold md:text-5xl">
                  Hassle-Free Lab Tests With Home Sample Collection Service
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  We know it can be difficult to do lab tests, especially during
                  busy schedules, harsh weather, and heavy traffic, which is why
                  we offer lab tests at home
                </p>
                <div className="flex gap-4">
                  <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                    Contact Us
                  </button>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-100 md:h-100 lg:h-screen bg-cover  bg-center "
            style={{
              backgroundImage:
                "url('https://www.praavahealth.com/media/images/5.width-576.format-webp.webp')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-2xl font-bold md:text-5xl">
                  Get all medicines & vaccines at your doorstep
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  Square pharmacy is now online and delivers across Dhaka
                </p>
                <div className="flex gap-4">
                  <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                    Order Now
                  </button>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
