"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TimeField,
} from "@heroui/react";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";

export function EditBooking({ booking, bookingId }) {
  // console.log(booking);
  const {  gender } =
    booking;
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const EditDetailsData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(EditDetailsData),
      },
    );
    const data = await res.json();
    // console.log(data);
    if (data.modifiedCount > 0) {
      toast.success("Booking Update Successfully");
      // return;
      window.location.reload();
    }
    return;
  };
  return (
    <div className="">
      <Modal className="">
        <Button
          size="sm"
          className={"hover:text-cyan-600 transition group font-medium"}
          variant="bordered"
        >
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Pencil className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Carefully</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField>
                          <Label>Name</Label>
                          <Input name="patientName" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                       
                        <TextField>
                          <Label>AppointmentDate</Label>

                          <Input
                            type="date"
                            name="appointmentdate"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                        <TimeField
                          isRequired
                          className="w-[256px]"
                          name="appointmentTime"
                        >
                          <Label>Appointment time</Label>
                          <TimeField.Group>
                            <TimeField.Input>
                              {(segment) => (
                                <TimeField.Segment segment={segment} />
                              )}
                            </TimeField.Input>
                          </TimeField.Group>
                        </TimeField>
                        <div>
                          <Select
                            defaultSelectedKeys={[gender]}
                            name="gender"
                            className="w-full"
                          >
                            <Label>Gender</Label>

                            <Select.Trigger className="rounded-2xl">
                              <Select.Value />
                              <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                              <ListBox>
                                <ListBox.Item id="Male">Male</ListBox.Item>
                                <ListBox.Item id="Female">Female</ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </div>
                      </div>

                      {/* Image URL */}
                    </div>

                    <Button
                      type="submit"
                      variant="ghost"
                      className="w-full rounded-none "
                    >
                      Update Booking
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
