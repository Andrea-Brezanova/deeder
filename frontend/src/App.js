import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
//import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AllPosts from "./Components/AllPosts";
import OfferHelp from "./Components/OfferHelp";
import GetHelp from "./Components/GetHelp";
import OfferCompany from "./Components/OfferCompany";
import GetCompany from "./Components/GetCompany";
import NoPage from "./Components/NoPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/offer-help" element={<OfferHelp />} />
        <Route path="/get-help" element={<GetHelp />} />
        <Route path="/offer-company" element={<OfferCompany />} />
        <Route path="/get-company" element={<GetCompany />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
