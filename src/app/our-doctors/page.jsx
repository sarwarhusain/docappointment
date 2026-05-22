import DoctorCard from "@/component/DoctorCard";
// import { Button, Input } from "@heroui/react";

const Doctors = async () => {
  const res = await fetch("http://localhost:5001/doctors");
  const Doctors = await res.json();

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl">Our Doctors</h2>
      <p className="font-semibold text-gray-600">
        At Square, Family Medicine Doctors as well as Visiting Specialists take
        care of you. Our doctors have years of local and international
        experience and treat you with the respect and empathy you deserve.
      </p>

      {/* <form className="flex items-center justify-center my-2 gap-2">
        <Input name="find" placeholder="Enter Doctors Name" />
        <Button type="submit">Search</Button>
      </form> */}

      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-5 ">
        {Doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
