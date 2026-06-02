// "user client";
import { CiCalendarDate, CiTimer, CiUser } from "react-icons/ci";
import { EditBooking } from "./EditBooking";
import DeleteBooking from "./DeleteBooking";
import { Button } from "@heroui/react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token: tokenData } = await auth.api.getToken({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    return redirect("/login");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
    headers: {
      authorization: `Bearer ${tokenData}`,
    },
  });
  const bookingData = await res.json();
  // console.log(bookingData);
  return (
    <div className="my-5">
      <Link href={"/"}>
        <Button variant="ghost">
          <FaHome /> Back to Home
        </Button>
      </Link>

      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {bookingData?.length > 0 ? (
            bookingData.map((booking, idx) => (
              <div key={idx} className="card bg-base-100  w-96 shadow-sm">
                <div className="card-body space-y-2">
                  <h2 className="card-title flex gap-1 items-center">
                    <CiUser />
                    <span className=" text-gray-600">Patient Name:</span>
                    <span className="text-gray-500">{booking.patientName}</span>
                  </h2>
                  <p className="flex gap-1 items-center">
                    <CiCalendarDate />
                    <span className=" text-gray-600">AppointmentDate: </span>
                    <span className=" text-gray-500">
                      {booking.appointmentDate}
                    </span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <CiTimer />
                    <span className=" text-gray-600">AppointmentTime: </span>
                    <span className=" text-gray-500">
                      {booking.appointmentTime}
                    </span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <AiOutlineMail />
                    <span className=" text-gray-600">Email: </span>
                    <span className=" text-gray-500">{booking.userEmail}</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    {booking.gender === "female" ? (
                      <BsGenderFemale />
                    ) : (
                      <BsGenderMale />
                    )}
                    <span className=" text-gray-600">Gender: </span>
                    <span className=" text-gray-500">{booking.gender}</span>
                  </p>
                  <div className="flex justify-center">
                    <EditBooking booking={booking} bookingId={booking._id} />
                    <DeleteBooking booking={booking} bookingId={booking._id} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <div className="border rounded-3xl shadow-2xl p-10 text-center max-w-md w-full bg-white">
                <FaSuitcaseRolling className="text-7xl text-cyan-500 mx-auto mb-5" />

                <h1 className="text-3xl font-bold mb-3">No Booking Found</h1>

                <p className="text-gray-500">
                  You have not booked any destination yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
