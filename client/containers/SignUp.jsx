import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavBar from "../components/LoginNav-Bar.jsx";


const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };

  //Similar and relevant function to the Sign-in. Could refactor to modularize and set the repeated parts as their own file and paths instead of rewriting them. 
  const handleClick = async () => {
    try{
      const body = {
        username: username,
        password: password
      }

      //Call the create user post function server side
      const data = await fetch(`http://localhost:8080/leaf/user/createuser`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (data.ok) {
        navigate('/')
      }

    } catch(err){
      console.log(err);
    }
    
  }

  const goHome = () => {
    navigate('/');
  }

  return (
    <div className="signInPage">
      <LoginNavBar />
      <div className="signInContainer">
        <h2>Sign Up:</h2>

        <div className="signInBox">
            <input name="username" type="text" placeholder="username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
            <input name="password" type="password" placeholder="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Sign Up</button>
            <button onClick={goHome}>Back to Log In</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
