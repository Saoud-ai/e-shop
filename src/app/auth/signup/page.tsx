"use client";
import React, { FC } from "react";
import AuthFormContainer from "@/app/components/AuthFormContainer";
import { Button, Input } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email("Invalied Email").required("Email is required!"),
  password: yup
    .string()
    .min(8, "The password at least 8 letters")
    .required("password is required"),
});

export default function SignUp() {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const toucheKey = Object.entries(touched).map(([key, value]) => {
    if (value) return key;
  });
  const finalError: [] = [];
  Object.entries(errors).forEach(([key, value]) => {
    if (toucheKey.includes(key) && value) finalError.push(value);
  });
  const formErrors: string[] = finalError;
  const { name, password, email } = values;

  return (
    <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        crossOrigin={undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        value={name}
      />
      <Input
        name="email"
        label="Email"
        crossOrigin={undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        value={email}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        crossOrigin={undefined}
        placeholder="current-password"
        value={password}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600"
        placeholder={undefined}
      >
        Sign up
      </Button>
      <div className="">
        {formErrors.map((err) => {
          return (
            <div key={err} className="space-x-1 flex items-center text-red-500">
              <XMarkIcon className="w-4 h-4" />
              <p className="text-xs">{err}</p>
            </div>
          );
        })}
      </div>
    </AuthFormContainer>
  );
}
