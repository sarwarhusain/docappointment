"use client";
import { Button, Modal } from "@heroui/react";
import { Rocket } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteBooking = ({ booking }) => {
  const { _id } = booking;
  // const session = await authClient.useSession();
  // const user = session?.user;
  // console.log(session);
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const deletedData = await res.json();
    if (deletedData.deletedCount > 0) {
      toast.success("Deleted Successfully");
      redirect("/our-doctors");
    }
    console.log(deletedData);
  };

  return (
    <div className="container mx-auto">
      <Modal>
        <Button
          className={"hover:text-cyan-600 transition group font-medium"}
          size="sm"
          variant="bordered"
        >
          Delete
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-90">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Rocket className="size-5" />
                </Modal.Icon>
                <Modal.Heading>
                  Delete CareFully,it will never return
                </Modal.Heading>
              </Modal.Header>

              <Modal.Footer>
                <Button onClick={handleDelete} className="w-full" slot="close">
                  Delete
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default DeleteBooking;
