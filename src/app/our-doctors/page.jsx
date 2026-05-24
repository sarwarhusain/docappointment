import SearchMethod from "@/component/SearchMethod";

const Doctors = async () => {
  const res = await fetch("http://localhost:5001/doctors");
  const Doctors = await res.json();

  return <SearchMethod doctors={Doctors} />;
};

export default Doctors;
