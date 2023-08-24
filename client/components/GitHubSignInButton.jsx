import React from 'react';

const GitHubSignInButton = ({ onGitHubSignIn }) => {
  const handleGitHubSignIn = () => {
    const clientId = '00c5bcae84b50ef24b1a';
    const redirectUri = "http://localhost:8080";
    const scope = "user";
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    onGitHubSignIn(githubOAuthUrl);
  };

  return (
    <button onClick={handleGitHubSignIn}>
      Sign in with GitHub
    </button>
  ) 
};

export default GitHubSignInButton;