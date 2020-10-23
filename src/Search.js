import React from "react";
import Spotify from "spotify-web-api-js";


export default class Search extends React.Component {
    // state = {
    //     input: ""
    // }

   

    // handleOnChange(e) {
        
    //     e.preventDefault();

    //     let input = document.querySelector("#input")

    //     this.setState({
    //         ...this.state,
    //         input: input.value
    //     })

    //     this.fetchResults()

    // }

    //                     <input type="text" placeholder="Start typing an artists name" value={this.state.input} name="input" id="input" onChange={(e) => this.handleOnChange(e)} />


    render() {
        return (
            <section>
                <h2>Search for an artist</h2>

                <h3>:{this.props.value}</h3>

                <form>
                    <input type="text" placeholder="Start typing an artists name" value={this.props.input} name="input" id="input" onChange={this.props.onChange} />
                </form>
            </section>
        )
    }
}