import React, { useEffect } from "react";
import logo from "./logo.png";
import Spotify from "spotify-web-api-js";
import "./App.css";

// Returns an access token that can be used in the `setAccessToken` function of the
// spotify-web-api library. Example:
// const accessToken = await getAccessToken();
// const spotify = new Spotify();
// spotify.setAccessToken(accessToken)
async function getAccessToken() {
  const response = await fetch(
    "https://assignment.convertkit.dev/.netlify/functions/auth-spotify"
  );

  const json = await response.json();

  return json.access_token;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
