import axios from "axios";

const API_KEY = 'fbe129d7';

const one = 'http://www.omdbapi.com/?apikey=[yourkey]&'
const two = 'http://img.omdbapi.com/?apikey=[yourkey]&'

const three = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

export async function getMovieByTitle(title) {
    const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    console.log(response.data);
    return response.data;
}

export async function search(title) {
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    console.log(response.data);
    return response.data;
}

