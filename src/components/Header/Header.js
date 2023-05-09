import "./Header.css";
import Logout from "../Logout/Logout";
import axios from "axios";

export default function ButtonAppBar() {
  return (
    <div className="header-div">
        <div className="logo">
           <h1>BLOG</h1> 
        </div>
        <div className="nav-links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <Logout />
            </ul>
        </div>
    </div>
  );
}
