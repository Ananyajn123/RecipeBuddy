import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import Recipe from './components/Recipe.js';
import Banner from './components/Banner.js';

const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);

  const searchRecipe = async () => {
    setIsLoading(true);
    const url = apiurl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipe();
  }, []);

  const handleSubmit = event => {
    event.preventDefault()
    searchRecipe()
  };

  return (
    <div className="App">
      <Banner/>
      <SearchBar
      handleSubmit={handleSubmit}
      value={query}
      onChange={event => setQuery(event.target.value)}
      isLoading={isLoading}
      />
      <div className='card-container'>
        {recipes !== null ? (
          recipes.map(recipe => (
            <Recipe
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))
        ) : (
          <p>No recipes</p>
        )}
      </div>
    </div>
  );
}

export default App;
