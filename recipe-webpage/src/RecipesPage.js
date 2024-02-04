// src/components/RecipesPage.jsx

import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesPage = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipes-page">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.title} recipe={recipe} onSelectRecipe={onSelectRecipe} />
      ))}
    </div>
  );
};

export default RecipesPage;
