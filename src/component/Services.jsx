import Image from "next/image";
import React from "react";

const Services = async () => {
  return (
    <div className="container mx-auto my-20">
      <div className="card card-side  grid grid-cols-1 md:grid-cols-2 gap-8 items-center  p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl cursor-pointer">
        <figure>
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co.com/Xk3ThhMx/01.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-gray-400">Why Choose Us</h2>
          <p className="font-semibold text-xl">Doctors Who Listen</p>
          <p className="text-lg">
            Our doctors spend time to get to know you and your health. They
            treat you with the respect and empathy you deserve and have years of
            local and international experience to give you advice you can rely
            on.
          </p>
        </div>
      </div>
      <div className="card card-side  grid grid-cols-1 md:grid-cols-2 gap-8 items-center  p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl cursor-pointer ">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-gray-400">Why Choose Us</h2>
          <p className="font-semibold text-xl">Diagnosis You Can Trust</p>
          <p className="text-lg">
            You can depend on the quality of our diagnosis and test results. Our
            laboratories are set up according to international standards and
            protocols and DocAppoint s diagnostic lab is one of six
            internationally accredited labs in Bangladesh.
          </p>
        </div>
        <figure>
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co.com/99HDr12q/Diagnosis-you-can-2e16d0ba-fill-844x557-c0-format-webp.webp"
            alt="Movie"
          />
        </figure>
      </div>
      <div className="card card-side  grid grid-cols-1 md:grid-cols-2 gap-8 items-center  p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl cursor-pointer ">
        <figure>
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co.com/Rp99qKwx/3.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-gray-400">Why Choose Us</h2>
          <p className="font-semibold text-xl">Healthcare Anytime, Anywhere</p>
          <p className="text-lg">
            We use technology to make healthcare accessible to you no matter
            where you are. You can access your health data, book appointments,
            review your prescriptions, and view your medical records, anywhere
            at your convenience.
          </p>
        </div>
      </div>
      <div className="card card-side  grid grid-cols-1 md:grid-cols-2 gap-8 items-center  p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl cursor-pointer ">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-gray-400">We Care For You Like Family</h2>
          <p className="font-semibold text-xl">Open every day from 8AM - 10PM</p>
        </div>
        <figure>
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co.com/9m1SmG9Y/4.webp"
            alt="Movie"
          />
        </figure>
      </div>
    </div>
  );
};

export default Services;
