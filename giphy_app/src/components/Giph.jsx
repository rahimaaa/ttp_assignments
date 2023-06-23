
import React, { useState, useEffect } from 'react';

const API_KEY = '4GJnEl8NxQVfWloDgwlt3hcTtAANBgdg';

const Giph = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [gifs, setGifs] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`
        );
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error searching GIFs:', error);
      }
    };
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    useEffect(() => {
      const fetchTrendingGifs = async () => {
        try {
          const response = await fetch(
            `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
          );
          const data = await response.json();
          setGifs(data.data);
        } catch (error) {
          console.error('Error fetching trending GIFs:', error);
        }
      };
  
      fetchTrendingGifs();
    }, []);
  
    return (
      <div className="container">
        <h1 className="title">Giphy Website</h1>
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter search term"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="gif-container">
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      </div>
    );
  };

export default Giph;
