import { useForm } from "react-hook-form";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { login } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        formData
      );
      const user = jwt_decode(data);
      dispatch(login({ token: data, user }));
      localStorage.setItem("token", data);
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!isAuthenticated ? (
        <div className="container">
          
          <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="userName">User Name:</label>
              <input
                type="text"
                placeholder="Enter your user-name"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <div className="alert">User name is required</div>
              )}
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                {...register("phoneNumber", { required: true})}
              />
              {errors.phoneNumber && (
                <div className="alert">Phone number is required</div>
              )}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter your E-mail"
                {...register("email", { required: true })}
              />
              {errors.email && <div className="alert">Email is required</div>}
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && <div className="alert">Password is required</div>}
              <button className="get-btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div>
            <img className="bicycle" src="./Images/bicycle.jpg" />
          </div>
        </div>
      ) : (
        <Navigate to="/protected/profile" />
      )}
    </>
  );
}

export default SignUp;
