import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import ButtonAppBar from "./components/Header/Header";
import SingleBlog from "./components/Single Blog/SingleBlog";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import SignUp from "./components/SignUp-SignIn/SignUp";
import SignIn from "./components/SignUp-SignIn/SignIn";
import UserDetails from "./components/UserDetails/UserDetails";
function App() {
  console.log(localStorage.getItem("token"), "token");
  return (
    <BrowserRouter>
      <ButtonAppBar />
      {localStorage.getItem("token") ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getSingleBlog/:id" element={<SingleBlog />} />
          <Route exact path="/createBlog" element={<CreateBlog />} />
          <Route exact path="/userDetails/:id" element={<UserDetails/>} />
        </Routes>
      ):
      <Routes>
        <Route path="*" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
}
    </BrowserRouter>
  );
}

export default App;
