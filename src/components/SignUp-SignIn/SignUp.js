import {useState, useEffect} from 'react';
import './SignUp.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userInfo, setUserInfo]  =  useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();



    const handleInputChange = (e) =>{
        const {name, value} = e.target;

        setUserInfo((prev)=>{
            return {...prev, [name]: value}
        })
    } 

    const handleSignUpSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/v1/newUser", userInfo);
            console.log(response, response);
           navigate("/sign-in");
        } catch (error) {
            console.log(error, "error")
        }
    }

    return (
        <div className='main-sign-div'>
            <h1>Sign- Up </h1>
            <div className='username-div'>
                <form>
                <h3>Name</h3>
                <input type='text' required name="name" placeholder='username' onChange={handleInputChange} value={userInfo.name} />
                <h3>email</h3>
                <input type='email' required name="email" placeholder='email' onChange={handleInputChange} value={userInfo.email} />
                <h3>Password</h3>
                <input type='password' required name="password" placeholder="password" onChange={handleInputChange} value={userInfo.password}/>
                <h3>Confirm Password</h3>
                <input  type='password' required name="confirmPassword" placeholder="confirm -password" onChange={handleInputChange} value={userInfo.confirmPassword} />
                <div className='button-signup'>
                <button  type='submit' onClick={handleSignUpSubmit}>Sign-Up</button>
                    </div>  
                    </form>             
            </div>
            <Link to="/sign-in">
                Already an user?
            </Link>
            
        </div>
    );
};

export default SignUp;