import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Meme {
  url: string;
  title: string;
}

const Meme: React.FC = () => {
  const [meme, setMeme] = useState<Meme | null>(null);
  const [favorites, setFavorites] = useState<Meme[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      const memes = response.data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      setMeme({ url: randomMeme.url, title: randomMeme.name });
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

  const handleNextMeme = () => {
    fetchMeme();
  };

  const handleFavorite = () => {
    if (meme) {
      const updatedFavorites = [...favorites, meme];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Meme Viewer</h1>
      {meme ? (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg">
          <img src={meme.url} alt={meme.title} className="rounded-lg mb-4 w-full h-auto" />
          <p className="text-center text-xl text-gray-600 mb-4">{meme.title}</p>
          <div className="flex justify-center gap-4">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleNextMeme}
            >
              Next Meme
            </button>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleFavorite}
            >
              Favorite
            </button>
          </div>
        </div>
      ) : (
        <p>Loading meme...</p>
      )}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Favorites</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {favorites.map((fav, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md w-32">
              <img src={fav.url} alt={fav.title} className="rounded-lg w-full h-32 object-cover" />
              <p className="text-center text-sm text-gray-600">{fav.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meme;
