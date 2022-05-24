import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        formData
      );
      console.log(data);
    } catch (error) {}
  };

  return (
    <div class="sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <div class="alert">Please Enter Your Email!</div>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <div class="alert">Please Enter Your Password!</div>}
        <button type="submit">Click to Login</button>
      </form>
    </div>
  );
}
