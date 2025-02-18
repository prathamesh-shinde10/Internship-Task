import axios from 'axios';

// API key for OMDB (replace with your actual API key)
const apiKey = '77d53a2f ';

// Create an instance of axios with OMDB's base URL and the API key as default parameters
const omdb = axios.create({
  baseURL: 'https://www.omdbapi.com/',  // OMDB API's base URL
  params: {
    apikey: apiKey,  // Include the API key for every request
  },
});

export default omdb;  
