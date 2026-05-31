import BookingCard from "@/component/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const DoctorsDetails = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const doctorsData = await res.json();
  const {
    name,
    specialty,
    image,
    experience,
    designation,
    qualification,
    fee,
    availability,
    description,
  } = doctorsData;
  return (
    <div className="max-w-7xl my-20 mx-auto p-8 md:p-14 shadow-2xl bg-white  hover:shadow-cyan-100 hover:-translate-y-2 transition-colors duration-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-5">
            {name}
          </h2>
          <p className="uppercase text-gray-600 font-semibold text-lg mb-10">
            {designation}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 text-lg mb-2">{specialty}</p>
              <p className="text-xl font-bold">{experience}</p>
              <h3 className="text-gray-600 text-lg mb-2">Consultation Fee</h3>
              <p className="text-xl font-bold flex items-center">
                <FaBangladeshiTakaSign /> {fee}
              </p>
            </div>
            <div className="">
              <p className="text-gray-600 text-lg mb-2">Qualification</p>
              <h3 className="text-xl font-bold">{qualification}</h3>
            </div>
            <div className="flex-1">
              <h2 className="text-gray-600 text-lg mb-2 font-bold">
                Appointment Time
              </h2>
              {availability.map((time, idx) => (
                <h2 key={idx}>{time}</h2>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-lg ">{description}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-137">
            <Image src={image} alt="Doctor" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div>
        <BookingCard doctorsData={doctorsData} />
       
      </div>
    </div>
  );
};

export default DoctorsDetails;
