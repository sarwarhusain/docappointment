import { Button } from "@heroui/react";
import { CiCalendarDate, CiUser } from "react-icons/ci";

const MyBooking = async () => {
  const res = await fetch("http://localhost:5001/bookings");
  const BookingData = await res.json();
  // console.log(BookingData);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {/* <h2>Booking:{BookingData.length}</h2> */}
      {BookingData.map((booking, idx) => (
        <div key={idx} className="card bg-base-100  w-96 shadow-sm">
          <div className="card-body ">
            <h2 className="card-title flex gap-1 items-center">
              <CiUser />
              <span className=" text-gray-600">Patient Name:</span>
              <span className="text-gray-500">{booking.patientName}</span>
            </h2>
            <p className="flex items-center">
              <CiCalendarDate />
              <span className=" text-gray-600">AppointmentDate: </span>
              <span className=" text-gray-500">{booking.appointmentDate}</span>
            </p>
            <p className="flex items-center">
              <CiCalendarDate />
              <span className=" text-gray-600">AppointmentTime: </span>
              <span className=" text-gray-500">{booking.appointmentTime}</span>
            </p>
            <div className="flex justify-center">
              <Button variant="ghost" >
                Edit
              </Button>
              <Button variant="ghost" >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
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
