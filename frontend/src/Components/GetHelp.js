import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GetHelp() {
  const [body, setBody] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setcategories] = useState([]);

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

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/subcategories")
      
      .then((res) => {
        setSubcategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="write-request-form">
        Please fill out the form below. <br />
        Remember to say what matters!
      </div>
      <div className="offer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Write something about yourself and get in touch!"
            {...register("body", { required: true })}
          ></textarea>

          {errors.body && <div className="alert">Text is required</div>}
          <button className="get-btn">Submit</button>
        </form>
        <div>
          <div className="select-subcategory">
            <p>Please select a subcategory</p>
            <select {...register("subcategory", { required: true })}>
              {subcategories.map((subcategory) => {
                return (
                  <option value={subcategory._id}>{subcategory.name}</option>
                );
              })}
            </select>
          </div>
          <div className="select-category">
            <p>Please select a category</p>
            <select {...register("category", { required: true })}>
              {categories.map((category) => {
                return (
                  <option value={category._id}>{category.name}</option>
                );
              })}
            </select>
            
          </div>
        </div>
      </div>
    </>
  );
}
