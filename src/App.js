import React, { useState } from "react";
import logo from "./logo.png";
import Spotify from "spotify-web-api-js";
// import Search from './Search.js'
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

  console.log(json.access_token)

  return json.access_token;
}

function App() {

  const [input, setInput] = useState("")
  const [artists, setArtists] = useState([])
  // const [spotify] = useState(new Spotify())
  const spotify = new Spotify();
  spotify.setAccessToken("BQDMYl2DGzfpEaE5aUg4fTI6Zj21DV6gdAM6drJqdOtbyay9HWVf1Hc71j0XsmNmFRrlFL7pE8EInun4bQQ") // How can I store this token locally so I don't have to redo this request?

  console.log(spotify)

  function handleOnChange(e) {
        
    e.preventDefault();

    setInput(e.target.value)

    findArtist()
  
  }

  function findArtist() {

    let searchQuery = {input}.input

    spotify.searchArtists(searchQuery).then(
      function (data) {
        console.log(input)
        console.log(data.artists.items);
        setArtists(data.artists.items)
        renderArtists()
        // renderArtists(data.artists.items)
      },
      function (err) {
        console.error(err);
      }
    );
  }
  
  function renderArtists() {
    const allArtists = {artists}.forEach(artist => artist.name) 
    
    return allArtists
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Search for an artist</h1>
        <h2>Showing results for: "{input}"</h2>
        
        <form>
            <input type="text" name="input" id="input" onChange={(e) => handleOnChange(e)} />
        </form>




        {artists}

      </header>
    </div>
  );
}

export default App;
