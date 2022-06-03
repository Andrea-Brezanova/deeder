import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function GetHelp() {
  const [body, setBody] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setcategories] = useState([]);


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
    <div>
      <div className="request-body">
        <div className="request-form">
          <p className="request-info">
            Ask for help in the form below. 
            <br />
            Make sure to offer back cookies!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder=" Describe what you need help with here. "
              {...register("body", { required: true })}
            ></textarea>
            {errors.body && (
              <div className="alert">This field can not be empty</div>
            )}
            <div className="submit-section">
              <div className="subcategory-form">
                <div className="subcategory-list">
                  <p className="request-info">Please select a subcategory</p>

                  <select {...register("subcategory", { required: true })}>
                    {subcategories.map((subcategory) => {
                      return (
                        <option value={subcategory._id} key={subcategory._id}>
                          {subcategory.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <button className="get-btn">Submit</button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  );
}
