// src/components/RecipeDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { recipeTitle } = useParams();
  const recipe = recipes.find((r) => r.title.toLowerCase().replace(/\s+/g, '-') === recipeTitle);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
