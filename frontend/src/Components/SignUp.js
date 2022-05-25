import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        data
      );

      console.log(response);
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">User Name:</label>
        <input type="text" {...register("userName", { required: true })} />
        {errors.userName && <div>User name is required</div>}
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <div>Email is required</div>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <div>Password is required</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
