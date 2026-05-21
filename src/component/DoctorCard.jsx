import React from "react";

const DoctorCard = ({ doctor }) => {
  console.log(doctor);
  return (
    <div>
      <h2>{doctor.name}</h2>
    </div>
  );
};

export default DoctorCard;
