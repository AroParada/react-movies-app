import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import API from "../utils/API";
import swal from 'sweetalert';


class MovieContainer extends Component {
  state = {
    results: {},
    search: "",
    notfound: "",
  };
  
  componentDidMount(){
    this.searchMovies("her")
  }

  searchMovies = (query) => {
    API.search(query)
    .then((res) => {
      console.log('Response', res.data);
    if(res.data.results.length === 0 ){
      this.setState({ notfound: true })
      swal("Oops!", "no movie found", "error");
      return
    }
    this.setState({results: res.data.results[0]})
    // console.log(this.state.results)
  })
    .catch((err) => console.log(err));
  };
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log('value =', value)
    this.setState({
    [name]: value
  })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search)
  }

  render() {
    return (
      <div className="container center-align">
         <SearchBar 
         value={this.state.search}
         handleInputChange={this.handleInputChange}
         handleFormSubmit={this.handleFormSubmit}
          />
         <Card
         heading={this.state.results.title}
         src={"https://image.tmdb.org/t/p/w500/"+this.state.results.poster_path}
         overview={this.state.results.overview}
         released={this.state.results.release_date}
         language={this.state.results.original_language}
         url={"https://www.themoviedb.org/movie/"+this.state.results.id}
         />
      </div>
    )
  }
}

export default MovieContainer;