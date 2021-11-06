import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
       <form className="col s12">
        <div className="row">
          <div className="input-field col s6 " >
            <i className="material-icons prefix" >search</i>
            
              <input id="icon_prefix" type="text"  ></input>
              <button class="btn waves-effect waves-light" type="submit" name="action">Search
              <i class="material-icons right">send</i>
            </button>
            <label htmlFor="icon_prefix">Search for a movie</label>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;