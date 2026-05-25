"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

export function EditBooking({ booking }) {
  // console.log(booking);
  const { _id } = booking;
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const EditDetailsData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(EditDetailsData),
      },
    );
    const data = await res.json();
    console.log(data);
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
        <Button size="sm" className={'hover:text-cyan-600 transition group font-medium'} variant="bordered">
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Carefully</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField isRequired>
                          <Label>Name</Label>

                          <Input
                            // defaultValue={patientName}
                            name="patientName"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL */}
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-none bg-cyan-500 text-white"
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
