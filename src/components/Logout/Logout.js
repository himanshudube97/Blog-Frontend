import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  
  const handleLogout = async (e) => {
    e.preventDefault();
    // try {
    //   let response = await axios.get("http://localhost:8000/api/v1/logoutUser");
    //   console.log(response, "response");
    // } catch (error) {
    //   console.log(error, "error");
    // }
    localStorage.clear();
    navigate("/");
    window.history.go()
    
  };
 
  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
