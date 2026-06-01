import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto md:flex md:justify-between gap-5 my-15">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 border-l-4 border-olive-400 pl-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-500">About </span>DocAppoint
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
           DocAppoint exists to provide a better patient experience. We are a
            one-stop-shop for your health, offering caring doctors, world-class
            diagnostics, in-house pharmacy, and much more.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2">27+</div>
              <div className="text-lg text-gray-600">Departments</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center border transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg text-gray-600">Doctors</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center border transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="text-3xl font-bold text-success mb-2">984K+</div>
              <div className="text-lg text-gray-600">Patients Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
