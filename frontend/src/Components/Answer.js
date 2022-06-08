
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GetHelp() {
  const [subcategories, setSubcategories] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        formData,
        {
          headers: { authorization: `bearer ${localStorage.getItem("token")}` },
        }
      );
      navigate("/protected/thank-you");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/subcategories`)

      .then((res) => {
        setSubcategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="request-body">
        <div className="request-form">
          <p className="request-info">
            Write your answer here.
            
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder=" Get in touch! "
              {...register("body", { required: true })}
            ></textarea>
            {errors.body && (
              <div className="alert">This field can not be empty</div>
            )}
            <div className="submit-section">
              
              <button className="get-btn">Send answer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
