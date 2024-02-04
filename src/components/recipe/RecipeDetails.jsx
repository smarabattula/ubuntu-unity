import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div style={{ textAlign: 'center', color: '#ff0000' }}>Recipe not found</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '16px', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '16px', color: '#333', fontWeight: 'bold' }}>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '16px',
        }}
      />
      <p style={{ marginTop: '16px', fontSize: '18px', lineHeight: '1.5', color: '#555' }}>{recipe.description}</p>
      <div style={{ marginTop: '16px' }}>
        <h2 style={{ color: '#333' }}>Ingredients</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '16px' }}>
        <h2 style={{ color: '#333' }}>Instructions</h2>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: '#555' }}>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
