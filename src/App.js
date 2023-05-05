
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import ButtonAppBar from './components/Header/Header';
import SingleBlog from './components/Single Blog/SingleBlog';
function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/getSingleBlog/:id" element={<SingleBlog />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
