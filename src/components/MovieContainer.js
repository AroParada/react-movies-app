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
    this.searchMovies("Her")
  }

  searchMovies = (query) => {
    API.search(query)
    .then((res) => {
      console.log('Response', res.data);
    if(res.data.error){
      this.setState({ notfound: true })
      swal("Oops!", "no movie found", "error");
      return
    }
    this.setState({results: res.data.results[0]})
    console.log(this.state.results)

    })
    .catch((err) => console.log(err));
  }
  
  handleInputChange = event => {

  }
  render() {
    return (
      <div className="container center-align">
         <SearchBar onChange={this.handleInputChange} />
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