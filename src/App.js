
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import ButtonAppBar from './components/Header/Header';
import SingleBlog from './components/Single Blog/SingleBlog';
import CreateBlog from './components/CreateBlog/CreateBlog';
import SignUp from './components/SignUp-SignIn/SignUp';
function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route exact path="/getSingleBlog/:id" element={<SingleBlog />} />
      <Route path='/createBlog' element={<CreateBlog />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
