"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdArrowRightAlt } from "react-icons/md";
const BookingCard = ({ doctorsData }) => {
  const { name: doctorName } = doctorsData;
  // console.log( doctorsData);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    // "userEmail": "user@gmail.com",
    // "doctorName": "Dr. Ayesha Rahman",
    // "patientName": "Rahim Uddin",
    // "gender": "Male",
    // "phone": "01712345678",
    // "appointmentDate": "2026-05-12",
    // "appointmentTime": "10:30 AM"

    const handleBooking = async () => {
      const bookingData = {};
    };
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
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Doctor Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    defaultValue={doctorsData.name}
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    {/* <Dropdown>
                            <Button aria-label="Menu" variant="secondary">
                              Gender
                            </Button>
                            <Dropdown.Popover>
                              <Dropdown.Menu
                                onAction={(key) =>
                                  console.log(`Selected: ${key}`)
                                }
                              >
                                <Dropdown.Item
                                  id="new-file"
                                  textValue="New file"
                                >
                                  <Label>New file</Label>
                                </Dropdown.Item>
                                <Dropdown.Item
                                  id="copy-link"
                                  textValue="Copy link"
                                >
                                  <Label>Copy link</Label>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown.Popover>
                          </Dropdown> */}
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="company"
                    variant="secondary"
                  >
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
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
            {/* <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingCard;
