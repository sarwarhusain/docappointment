import DoctorCard from "@/component/DoctorCard";
import SearchMethod from "@/component/SearchMethod";
import { Button, Input } from "@heroui/react";
// import { Button, Input } from "@heroui/react";

const Doctors = async () => {
  const res = await fetch("http://localhost:5001/doctors");
  const Doctors = await res.json();

  return <SearchMethod doctors={Doctors} />;
};

export default Doctors;
