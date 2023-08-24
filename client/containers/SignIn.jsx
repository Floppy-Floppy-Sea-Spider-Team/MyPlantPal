import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavBar from "../components/LoginNav-Bar.jsx";
import GitHubSignInButton from "../components/GitHubSignInButton.jsx";

const SignIn = () => {
  //Relevant states
//   const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); //Function to enable the ability to switch pages

  let navigate = useNavigate();

  const handleGitHubSignIn = (githubOAuthUrl) => {
    // Handle the GitHub sign-in URL and navigation here
    window.location.href = githubOAuthUrl; // Redirect to GitHub OAuth URL
  };

  //Navigation paths. Can be modularized into its own set of files due to being called repeatedly multiple locations.
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };

  const toHome = () => {
    let path = "/home";
    navigate(path);
  }; //The functionality to create a new log in

  const Submit = async () => {
    // signup functionality (POST)
    try {
      // console.log('Entered try block');
      // console.log('username', username);
      //Create the username and password
      const data = {
        username: username,
        password: password,
      }; //Post request into the server side
      const response = await fetch(`http://localhost:8080/leaf/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }); //Check to make sure the response succeeds, if so use the correct navigation.
      if (response.ok) {
        const plantArray = await response.json();
        toHome();
      }
    } catch (err) {
      console.log(err);
    }
  }; //reder and create buttons to call the submit function. Take the username and passwords from below to apply to the data above,  the submit will send those to that function. //Sign up redirects to sign up page
  return (
    <div className="signInPage">
    
      <LoginNavBar />

      <div className="signInContainer">
        <h2>Sign In:</h2>
        <div className="signInBox">
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={Submit}>Sign In</button>
          <p>Don't have an account?</p>
          <button onClick={toSignUp}>Sign Up</button>

        </div>
       {/* Include the GitHub Sign-In button component */}
        
        <GitHubSignInButton
          onGitHubSignIn={handleGitHubSignIn}
        />
        
      </div>
     
    </div>
  );
};

export default SignIn;
