import { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/loginUser",
        userInfo
      );
      console.log(response, "res");

      if (response?.data?.statusCode === 200) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
        window.history.go();
      }else{
        alert("Error")
      }

      // window.history.go();
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="main-sign-div">
      <h1>Sign In </h1>
      <div className="username-div">
        <h3>email</h3>
        <input
          type="email"
          required
          name="email"
          placeholder="email"
          onChange={handleInputChange}
          value={userInfo.email}
          autoComplete="off"
        />
        <h3>Password</h3>
        <input
          type="password"
          required
          name="password"
          placeholder="password"
          onChange={handleInputChange}
          value={userInfo.password}
        />
        <div className="button-signup">
          <button type="submit" onClick={handleSignIn}>
            {" "}
            Sign -In{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
