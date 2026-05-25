import SearchMethod from "@/component/SearchMethod";

const Doctors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`);
  const Doctors = await res.json();

  return <SearchMethod doctors={Doctors} />;
};

export default Doctors;
