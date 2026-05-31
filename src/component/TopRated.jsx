
import DoctorCard from "./DoctorCard";

const TopRated = async () => {
  // const { token: tokenData } = await auth.api.getToken({
  //   headers: await headers(),
  // });
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top-rated`);
  const topRated = await res.json();
  // console.log(topRated);
  return (
    <div className="container mx-auto my-20 ">
      <h2 className="font-bold text-2xl">Top rated Doctor</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto bg-gray-100">
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
