import { useNavigate } from "react-router-dom";

function OnePost({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/answer");
  };

  return (
    <div className="post-and-heart">
      <div className="one-post">
        <div className="post-info">
          {/* <p className="post-author">Name: {post.author.userName}</p> */}
          <p classname="post-date">Date: {post.date}</p>
          <p className="post-number">Phone number:{post.phoneNumber}</p>
          {/* <p className="post-subcategory">Subcageory: {post.subcategory.name ? post.subcategory.name : ""}</p>  */}
        </div>
        <p className="post-description">{post.body}</p>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="hearts"
          src={"./Images/heart.gif"}
          alt=""
        />
      </div>
    </div>
  );
}

export default OnePost;
