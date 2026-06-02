"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { IoExitOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const feedbackData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(feedbackData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Email Send Successfully");
      // window.location.reload();
      redirect("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* LEFT INFO */}
        <div className="p-6 rounded-2xl bg-white backdrop-blur-lg border border-white shadow-lg animate__animated animate__fadeInLeft">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            Have questions about Our Service,Please let us known .
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaPhone className="text-green-500" />
              <span>+8801749875859</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>sarwarahmed693@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Sylhet, Bangladesh</span>
            </div>
          </div>
        </div>

        <Form
          className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop:backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-4 animate__animated animate__fadeInRight"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="description" type="text">
            <Label>Description</Label>
            <Input placeholder="Give Your FeedBack" />
            <FieldError />
          </TextField>
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

          <TextField isRequired name="phone" type="phone">
            <Label>Phone</Label>
            <Input placeholder="Enter your Number" />
            <FieldError />
          </TextField>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="ghost" className="" type="submit">
              <IoExitOutline />
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
