import React, { useState } from "react";
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

  console.log(json.access_token)

  return json.access_token;
}

function App() {

  const [input, setInput] = useState("")
  const [artists, setArtists] = useState([])
  const spotify = new Spotify();
  spotify.setAccessToken(getAccessToken()) // Access token may need to be hard coded for demo purposes

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
      },
      function (err) {
        console.error(err);
      }
    );
  }
  
  function renderArtists() {
    console.log(artists)

    return artists.map(artist => <p><a href={artist.external_urls.spotify}>{artist.name}</a></p>)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Search for an artist</h1>
        <h2>Showing results for: "{input}"</h2>
        
        <form>
            <input type="text" name="input" id="input" onChange={(e) => handleOnChange(e)} />
        </form>


      {renderArtists()}


      </header>
    </div>
  );
}

export default App;
