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
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

// background-color: rgba(255, 255, 255, 1);
// background-color: rgba(255, 255, 255, 1);

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData);
    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      // callbackURL: "/",
    });
    if (error) {
      // console.log(error);
      return;
    }
    if (data) {
      redirect("/");
    }
    // console.log(data, error, "data from signup");
  };

  return (
    <div className="min-h-screen my-20 bg-[#ffffff]">
      <Form
        className="flex w-96 flex-col gap-4 container mx-auto border m-2 p-5 shadow-2xl rounded-2xl"
        onSubmit={onSubmit}
      >
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
            Must be at least 6 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button variant="ghost" className={"w-full border"} type="submit">
          <Check />
          Sign In
        </Button>
        <p className="underline">
          Do not have an account? <Link href={"/signup"}>SignUp</Link>
        </p>
      </Form>
      <div></div>
    </div>
  );
};
export default Login;
