import Image from "next/image";
import Link from "next/link";

const MembershipPlan = ({ plan }) => {
  // console.log(doctor);

  const { _id,image, title, month, price } = plan;
  return (
    <div className="container mx-auto  max-w-96 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <figure className="px-10 pt-10">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className=" object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="font-semibold text-gray-500">Price:{price}</p>
        <p>{month}</p>

        <div className="card-actions">
          <Link href={`/membership/${_id}`}>
            <button className="underline ">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
