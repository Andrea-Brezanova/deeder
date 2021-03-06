import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Protected from "./Components/Protected";
import AllPosts from "./Components/AllPosts";
import OfferHelp from "./Components/OfferHelp";
import GetHelp from "./Components/GetHelp";
import OfferCompany from "./Components/OfferCompany";
import GetCompany from "./Components/GetCompany";
import ThankYou from "./Components/ThankYou";
import Answer from "./Components/Answer";
import Cleaning from "./Components/Cleaning";
import NoPage from "./Components/NoPage";

import SearchBar from "./Components/Checkboxes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="protected" element={<Protected />}>
            <Route path="profile" element={<Profile />} />
            <Route path="offer-help" element={<OfferHelp />} />
            <Route path="get-help" element={<GetHelp />} />
            <Route path="offer-company" element={<OfferCompany />} />
            <Route path="get-company" element={<GetCompany />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="answer" element={<Answer />} />           
          </Route>
          <Route path="posts" element={<AllPosts />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
