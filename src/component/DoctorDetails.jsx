import Image from "next/image";

const DoctorDetails = ({ doctor }) => {
  // console.log(doctor);
  const {
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
  } = doctor;
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />

        {/* Specialty Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-cyan-500 px-4 py-1 text-sm font-medium text-white shadow">
          {specialty}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Name */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>

          <p className="mt-1 text-sm text-gray-500">{experience} Experience</p>
        </div>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Info */}
        <div className="space-y-2 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-500">Hospital</span>

            <span className="text-right font-semibold text-gray-800">
              {hospital}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-500">Location</span>

            <span className="text-right font-semibold text-gray-800">
              {location}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-500">Consultation Fee</span>

            <span className="rounded-full bg-cyan-50 px-3 py-1 font-bold text-cyan-600">
              ৳ {fee}
            </span>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Availability
          </h3>

          <div className="flex flex-wrap gap-2">
            {availability.map((day, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 w-full rounded-xl bg-cyan-500 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
