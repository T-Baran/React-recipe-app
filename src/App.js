import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import styled from "styled-components";

function App() {
  const APP_ID = "39113ea8";
  const APP_KEY = "4a09bd184a2abefd17b8cec3ba522492";
  // let searchWord = "";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <StyledHeader>Search for Your perfect recipe</StyledHeader>
      <Search
        search={search}
        updateSearch={updateSearch}
        getSearch={getSearch}
      />

      <StyledContainer>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            url={recipe.recipe.url}
          />
        ))}
      </StyledContainer>
    </div>
  );
}
const StyledHeader = styled.h1`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const StyledContainer = styled.div`
  width: 100vw;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export default App;
