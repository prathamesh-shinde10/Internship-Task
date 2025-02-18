import React, { useState } from 'react';
import omdb from '../component/omdb'; // Importing the axios instance for OMDB

// Define the structure of object
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const Movies: React.FC = () => {
  const [query, setQuery] = useState<string>('');  // Search query
  const [movies, setMovies] = useState<Movie[]>([]);  // Movies search results
  const [loading, setLoading] = useState<boolean>(false);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state

  // Fetch movie data from OMDB API
  const fetchMovies = async (query: string) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await omdb.get('', {
        params: {
          s: query,  // Movie search query
        },
      });

      if (response.data.Response === 'True') {
        setMovies(response.data.Search);  // Update the movies state with the search results
      } else {
        setError('No results found');
      }
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // Handle the search button click
  const handleSearch = () => {
    if (query.trim() === '') {
      setError('Please enter a movie name');
      return;
    }
    fetchMovies(query);  // Call API to fetch the movies based on the query
  };

  return (
   
   
    <div className="p-4 mx-auto flex flex-col h-screen  bg-gray-200">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Handle input change
          className="p-2 rounded-lg shadow-lg w-full sm:w-1/2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-lg ml-4"
        >
          Search
        </button>
      </div>

      
      {loading && <p>Loading...</p>}

      
      {error && <p className="text-red-500">{error}</p>}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} //if the movie has a valid poster URL
              alt={movie.Title}
              className="w-full h-56 object-cover mx-auto"
            />
            <div className="p-4 ">
              <h3 className="font-bold text-lg">{movie.Title}</h3>
              <p className="text-gray-500">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Movies;
