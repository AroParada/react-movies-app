import axios from "axios";
const APIKEY ="ef51583cff74a9eb0121ead0f0cc314d";
const BASEURL = "https://api.themoviedb.org/3/search/movie?api_key="

export default {
search: function(query){
  return axios.get(BASEURL + APIKEY + "&query=" + query)
}
}