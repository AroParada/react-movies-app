import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
              <input id="icon_prefix" type="text" ></input>
            <label htmlFor="icon_prefix">Search for a movie</label>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;