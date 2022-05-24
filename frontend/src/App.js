import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AllPosts from "./Components/AllPosts";
import NoPage from "./Components/NoPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
