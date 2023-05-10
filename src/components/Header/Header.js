import "./Header.css";
import Logout from "../Logout/Logout";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ButtonAppBar() {
  let userId = localStorage.getItem("_id");
  return (
    <div className="header-div">
        <div className="logo">
           <h1>BLOG</h1> 
           {localStorage.getItem("token") ?
           <Link to={`/userDetails/${userId}`} >
           <h2> User Detail</h2>
           </Link> 
            : 
            ""
            }
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
