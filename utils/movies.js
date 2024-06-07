import axios from 'axios';

const API_KEY = 'fbe129d7';

const one = 'http://www.omdbapi.com/?apikey=[yourkey]&';

const three = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

export async function getShowByTitle(title, type) {
  let url;
  switch (type) {
    case 'movie':
      url = `http://www.omdbapi.com/?t=${title}&type=movie&apikey=${API_KEY}`;
      break;
    case 'series':
      url = `http://www.omdbapi.com/?t=${title}&type=series&apikey=${API_KEY}`;
      break;

    default:
      url = `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`;
  }

  const response = await axios.get(url);
  // console.log(response.data);
  return response.data;
}

export async function getMovieById(id) {
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  // console.log(response.data);
  return response.data;
}

export async function search(title, type) {
  let url;
  switch (type) {
    case 'movie':
      url = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${API_KEY}`;
      break;
    case 'series':
      url = `http://www.omdbapi.com/?s=${title}&type=series&apikey=${API_KEY}`;
      break;

    default:
      url = `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`;
  }
  const response = await axios.get(url);
  return response.data;
}
