"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Description,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TimeField,
  Select,
  ListBox,
} from "@heroui/react";

import toast from "react-hot-toast";
import { MdArrowRightAlt } from "react-icons/md";
const BookingCard = ({ doctorsData }) => {
  const { name } = doctorsData;
  const { data: session } = authClient.useSession();
  const user = session?.user; //

  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const bookingData = {
      doctorName: user?.doctorName, // required
      patientName: user?.patientName,
      userEmail: user?.userEmail, // required
      phone: user?.phone,
      gender: user?.gender, // required
      appointmentTime: user?.appointmentTime,
      appointmentDate: user?.appointmentDate,
    };
    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("booking Successfully");
      window.location.reload();
    }
  };

  return (
    <Modal>
      <Button variant="ghost">
        Book Now <MdArrowRightAlt />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Appointment Form</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={handleBooking}>
                  <TextField
                    className="w-full"
                    isRequired
                    value={name}
                    name="doctorName"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Doctor Name</Label>
                    <Input placeholder="Enter Doctor name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    isRequired
                    name="patientName"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your Patient name" />
                  </TextField>
                  <TextField
                    value={user?.email}
                    className="w-full"
                    isRequired
                    name="userEmail"
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField>
                    <Label>Phone</Label>
                    <Input name="phone" type="number" />
                  </TextField>

                  <div>
                    <Select name="gender" isRequired className="w-full">
                      <Label>Gender</Label>

                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="male">Male</ListBox.Item>
                          <ListBox.Item id="female">Female</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <TextField isRequired>
                    <Label>Appointment Date</Label>
                    <Input name="appointmentDate" type="date" />
                  </TextField>

                  <TimeField
                    isRequired
                    className="w-[256px]"
                    name="appointmentTime"
                  >
                    <Label>Appointment time</Label>
                    <TimeField.Group>
                      <TimeField.Input>
                        {(segment) => <TimeField.Segment segment={segment} />}
                      </TimeField.Input>
                    </TimeField.Group>
                    <Description>Required field</Description>
                  </TimeField>
                  <div className="flex items-center">
                    <Button type="submit" variant="secondary">
                      Submit
                    </Button>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingCard;
