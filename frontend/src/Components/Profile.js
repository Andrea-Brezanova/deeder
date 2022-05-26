import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${user.id}`).then((res)=> {
      console.log(res)
    }).catch((err)=> {
      console.log(err)
    })
}, []);

  const user = useSelector((state) => {
    return state.auth.user;
  });


  
  
  return <div>Welcome: {user.userName}</div>;
}

export default Profile;
