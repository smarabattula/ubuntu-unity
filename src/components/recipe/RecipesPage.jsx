// src/RecipesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipesPage = ({ recipes }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 20, textEmphasis: true }}>Recipes</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {recipes.map((recipe, index) => (
          <Link index={index} to={`/recipes/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
          <li style={{ margin: '10px', textAlign: 'center', maxWidth: '300px' }}>
            {/* <a href={`/recipe/${encodeURIComponent(recipe.title)}`} style={{ textDecoration: 'none', color: 'black' }}> */}
              <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <p style={{ fontWeight: 'bold', margin: '5px 0' }}>{recipe.title}</p>
              <p>{recipe.description} test</p>
            {/* </a> */}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
