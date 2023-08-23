import React from "react";

const GitHubSignInButton = ({ onGitHubSignIn, shouldRender, toHome }) => {
  const handleGitHubSignIn = () => {
    // Lines 21-23 are the query parameters required by the github oauth api
    // Construct the GitHub OAuth URL with necessary parameters
    const clientId = '00c5bcae84b50ef24b1a' // Replace with your GitHub OAuth application's Client ID
    const redirectUri = "http://localhost:8080"; // Replace with your callback URL
    const scope = "user"; // Define the permissions your app needs

    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`; // Call the GitHub sign-in function provided by the parent component

    onGitHubSignIn(githubOAuthUrl);
  };

  return shouldRender ? ( // if it's true that the shouldRender is false (that the 'signedIn' state variable is false), it'll proceed with rendering the button
    <button
      onClick={() => {
        handleGitHubSignIn(); // Navigate to /home when GitHub sign-in is successful
        toHome();
      }}
    >
      Sign in with GitHub
    </button>
  ) : void(0);
};

export default GitHubSignInButton;
