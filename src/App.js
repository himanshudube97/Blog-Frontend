
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import ButtonAppBar from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
      <Route path='/' element ={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
