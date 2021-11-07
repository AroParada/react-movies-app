import React from "react";

function SearchBar (props) {
    return (
      <div className="row">
       <form className="col s12">
        <div className="row">
          <div className="input-field col s12 " >
            <i className="material-icons prefix" >search</i>
              <input
               id="search"
               type="text"  
               name="search"
               onChange={props.handleInputChange}
               value={props.value}
               />
              <button onClick={props.handleFormsubmit} className="btn waves-effect waves-light " type="submit" name="action">Search
                <i className="material-icons right">send</i>
              </button>
            <label htmlFor="icon_prefix">Search for a movie</label>
          </div>
        </div>
        </form>
      </div>
    )
  }

export default SearchBar;