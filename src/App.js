import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';

const App = () => {
  const APP_ID = '83c1c43e';
  const APP_KEY = '3f753cf03185d3cf509bb4f52c8cebbb';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState((``))

  useEffect(()=>{
    getRecipes();
  },[query])
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
    console.log(search)
  }
  return ( 
    <div className="App">
      <div className="thezayaka">
      <h1>FOOISTAN</h1>
      <a href="https://www.instagram.com/thezayaka/"><h2>(@thezayaka)</h2></a>
      <h2>presents...</h2>
      <b>Every Possible food recipe for Bloggers and cooking lovers!</b>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Enter a Food Name" className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>{
        return <Recipes 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        key={recipe.recipe.label} 
        ingredients={recipe.recipe.ingredients}
        />
      })}
      </div>
      <footer className="thezayaka">
      <h1>Website Developer : Prakash Agrahari</h1>
      </footer>
    </div>
   );
}
 
export default App;
