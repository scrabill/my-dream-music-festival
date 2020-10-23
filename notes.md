# Notes

> - A user can search for an artist, and see results as they type
> - A user can click on an artist to see the artist's top tracks

## Process

- Plan everything out
    - See if I have any questions
    - What are the bare minimums I need to make this work in the time alloted
- Get API working
    - First, testing to see what worked and what is returned from the `getAccessToken` function
    - Hurdle of token not being ready, by the time to search function was ran
    - Look at how the data comes in. Everything is `data` but I need to drilldown to Artist which is contained within `items`
- Render the form
    - Separate the form elements into a `Search` component. It'll contain the search field, submit button and headline and current search term.
    - To keep track of the current search term I'll create state with an "input" placeholder of an empty string. As the user types, the string will be updated (on change instead of on Click)
- Render the Results
    - Once state was updating as the input field is updated, now I need to query the API, then render the results
    - fetchMovies....where should the requests live?
    - made teh call to revert previous changes and manage state in app, that could them be sent to child components of search, artist, results, etc
    - Canb't use state ={ } in a functional component (would have to refer). BUT YOU CAN UASE HOOKS TO CREATE YOUR OWN STEATE. https://reactjs.org/docs/hooks-state.html
    - Removed searhc component since passing info back and forth seemed bulky
    - TIMING ISSUES< STATE IS MANAGED BUT TEH REFRESHES ARE CAUSING THE THINK TO RELOAD EACH TIME. I may have to hardcode a token, just to be able to have something rendeered to the page
    why does the search query look like this?


    ```https://api.spotify.com/v1/search/?q=%5Bobject%20Object%5D&type=artist```

    {input} is the object so the query is obecth object

    input.input shows the value of the object with a key of input





{this.state.results.map(movie => <Movie nomineeIDs={this.state.nomineeIDs} key={movie.imdbID} movie={movie} onClick={(e) => this.handleNomination(e)} text={"Nominate"} /> )}

<li id={this.props.movie.imdbID}>{this.props.movie.Title} - {this.props.movie.Year} - <button id={this.props.movie.imdbID} onClick={(e) => this.props.onClick(e)} disabled={disabled}>{this.props.text}</button></li>

<Search value={input} onChange={(e) => handleOnChange(e)}/>



## Instructions

- Clone the repo
- Install dependencies with `yarn install`
- Run the local server with `yarn run`
- Enter `start` when prompted
- The app will load automatically at `http://localhost:3000/`

# Components

- Form
    - Search Field
    - Submit Button
- Results container
    - Current search term
    - Artist
        - a single result that matches the search query
    - Artist Details
        - Top (5?) tracks by that artist

# To Look Into

- What the different `yarn` commands do?
- What are best practices as far as React app file organization?
- Async functions
- How to continually update results as they type

## Future Enhancements

- Error messaging
- Placeholder
- Waiting to load animation
- Pagniation


## ROUGHT

What the data looks like from the search results `data.items`

```json
Search artists by "Love" 
{artists: {…}}
artists:
href: "https://api.spotify.com/v1/search?query=Love&type=artist&offset=0&limit=20"
items: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
limit: 20
next: "https://api.spotify.com/v1/search?query=Love&type=artist&offset=20&limit=20"
offset: 0
previous: null
total: 10012
__proto__: Object
__proto__: Object
```
