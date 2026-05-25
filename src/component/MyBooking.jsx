import { CiCalendarDate, CiUser } from "react-icons/ci";
import { EditBooking } from "./EditBooking";
import DeleteBooking from "./DeleteBooking";
import { Button } from "@heroui/react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { FaSuitcaseRolling } from "react-icons/fa6";

const MyBooking = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/`);
  const BookingData = await res.json();
  return (
    <div className="my-5">
      <Link href={"/"}>
        <Button variant="ghost">
          <FaHome /> Back to Home
        </Button>
      </Link>

      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {BookingData.length > 0 ? (
            BookingData.map((booking, idx) => (
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
                    <CiCalendarDate />
                    <span className=" text-gray-600">AppointmentTime: </span>
                    <span className=" text-gray-500">
                      {booking.appointmentTime}
                    </span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <CiCalendarDate />
                    <span className=" text-gray-600">Email: </span>
                    <span className=" text-gray-500">{booking.userEmail}</span>
                  </p>
                  <div className="flex justify-center">
                    <EditBooking booking={booking} />
                    <DeleteBooking booking={booking} />
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
//  "userEmail": "user@gmail.com",
//   //   "doctorName": "Dr. Ayesha Rahman",
//   //   "patientName": "Rahim Uddin",
//   //   "gender": "Male",
//   //   "phone": "01712345678",
//   //   "appointmentDate": "2026-05-12",
//   //   "appointmentTime": "10:30 AM"

export default MyBooking;
