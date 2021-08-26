import axios from "axios";

const API_KEY = 'e2d835072f9c8816b19df67204a01093';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}