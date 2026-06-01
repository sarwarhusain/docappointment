import DoctorCard from "./DoctorCard";

const TopRated = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top-rated`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const topRated = await res.json();
  return (
    <div className="container mx-auto space-y-5">
      <h2 className="font-bold text-2xl md:text-3xl text-center">
        Top rated Doctor
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Meet our highly experienced and top-rated doctors dedicated to providing
        exceptional healthcare. Book appointments with trusted specialists who
        are committed to delivering personalized and compassionate medical care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto">
        {topRated.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
            className="
              opacity-0
              animate-[fadeUp_.6s_ease-out_forwards]
              hover:-translate-y-2
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
