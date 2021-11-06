import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

class MovieContainer extends Component {
  render() {
    return (
      <div class="container center-align">
         <SearchBar />
         <Card />
      </div>
    )
  }
}

export default MovieContainer;