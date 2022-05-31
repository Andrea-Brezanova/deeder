import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  //const token = useSelector((state) => state.auth.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        formData
      );
      const user = jwt_decode(data);
      dispatch(login({ token: data, user }));
      localStorage.setItem("token", data);
      navigate("/");
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="sign-in">
          <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="Enter your e-mail"{...register("email", { required: true })} />
            {errors.email && <div class="alert">Please Enter Your Email!</div>}
            <label htmlFor="password">Password:</label>
            <input
              type="password" placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="alert">Please Enter Your Password!</div>
            )}
            <button className="get-btn" type="submit">Click to Login</button>
          </form>
          {/* <p>{token}</p> */}
        </div>
      ) : (
        <Navigate to="/protected/profile" />
      )}
    </>
  );
}
