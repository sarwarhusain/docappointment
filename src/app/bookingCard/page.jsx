"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const BookingCard = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  };
  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default BookingCard;

// <Modal>
//           <Button variant="ghost">
//             Book Now <MdArrowRightAlt />
//           </Button>
//           <Modal.Backdrop>
//             <Modal.Container placement="auto">
//               <Modal.Dialog className="sm:max-w-md">
//                 <Modal.CloseTrigger />
//                 <Modal.Header>
//                   <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                     <Envelope className="size-5" />
//                   </Modal.Icon>
//                   <Modal.Heading>Contact Us</Modal.Heading>
//                   <p className="mt-1.5 text-sm leading-5 text-muted">
//                     Fill out the form below and well get back to you.
//                   </p>
//                 </Modal.Header>
//                 <Modal.Body className="p-6">
//                   <Surface variant="default">
//                     <form className="flex flex-col gap-4">
//                       <TextField
//                         className="w-full"
//                         name="name"
//                         type="text"
//                         variant="secondary"
//                       >
//                         <Label>Name</Label>
//                         <Input placeholder="Enter your name" />
//                       </TextField>
//                       <TextField
//                         className="w-full"
//                         name="email"
//                         type="email"
//                         variant="secondary"
//                       >
//                         <Label>Email</Label>
//                         <Input placeholder="Enter your email" />
//                       </TextField>
//                       <TextField
//                         className="w-full"
//                         name="phone"
//                         type="tel"
//                         variant="secondary"
//                       >
//                         {/* <Dropdown>
//                             <Button aria-label="Menu" variant="secondary">
//                               Gender
//                             </Button>
//                             <Dropdown.Popover>
//                               <Dropdown.Menu
//                                 onAction={(key) =>
//                                   console.log(`Selected: ${key}`)
//                                 }
//                               >
//                                 <Dropdown.Item
//                                   id="new-file"
//                                   textValue="New file"
//                                 >
//                                   <Label>New file</Label>
//                                 </Dropdown.Item>
//                                 <Dropdown.Item
//                                   id="copy-link"
//                                   textValue="Copy link"
//                                 >
//                                   <Label>Copy link</Label>
//                                 </Dropdown.Item>
//                               </Dropdown.Menu>
//                             </Dropdown.Popover>
//                           </Dropdown> */}
//                         <Label>Phone</Label>
//                         <Input placeholder="Enter your phone number" />
//                       </TextField>
//                       <TextField
//                         className="w-full"
//                         name="company"
//                         variant="secondary"
//                       >
//                         <Label>Company</Label>
//                         <Input placeholder="Enter your company name" />
//                       </TextField>
//                       <TextField
//                         className="w-full"
//                         name="message"
//                         variant="secondary"
//                       >
//                         <Label>Message</Label>
//                         <Input placeholder="Enter your message" />
//                       </TextField>
//                     </form>
//                   </Surface>
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button slot="close" variant="secondary">
//                     Cancel
//                   </Button>
//                   <Button slot="close">Send Message</Button>
//                 </Modal.Footer>
//               </Modal.Dialog>
//             </Modal.Container>
//           </Modal.Backdrop>
//         </Modal>
