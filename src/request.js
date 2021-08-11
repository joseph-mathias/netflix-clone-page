const API_KEY = "f4d9c736ebd0be3b173b8f011ceca34f";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gernes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_gernes=99`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_gernes=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_gernes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_gernes=27`,
};

export default requests;
