"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.praavahealth.com/media-images/paBIifE2aWCJmCpys24qrfIzIcE=/288/width-576%7Cformat-webp/1.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                  Your Health, Our Priority
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  Book appointments with trusted doctors and get advanced
                  healthcare services easily.
                </p>

                <div className="flex gap-4">
                  <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                    Book Appointment
                  </button>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center"
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
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                  Modern Medical Care
                </h1>

                <p className="mb-8 text-lg text-gray-200">
                  Experience premium diagnostics and specialist consultation
                  with expert doctors.
                </p>

                <div className="flex gap-4">
                  <button className="rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
                    Explore Services
                  </button>

                  <button className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black">
                    Contact Us
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
