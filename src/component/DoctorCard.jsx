import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  // console.log(doctor);
  const { _id, name, image, designation } = doctor;
  return (
    <div className="container mx-auto  max-w-80 ">
      <figure className="px-10 pt-10">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p className="font-semibold text-gray-500">{designation}</p>
        <div className="card-actions">
          <Link href={`/our-doctors/${_id}`}>
            <button className="underline ">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
