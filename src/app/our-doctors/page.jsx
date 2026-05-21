import DoctorCard from "@/component/DoctorCard";
import React from "react";

const Doctors = async () => {
  const res = await fetch("http://localhost:5001/doctors");
  const Doctors = await res.json();
  console.log(Doctors);

  return (
    <div>
      <h2>Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        {Doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
