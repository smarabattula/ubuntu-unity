// src/components/RecipeCard.js

import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: 200, height: 200, margin: 2, cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }}>
        {recipe.image && (
          <CardMedia
            component="img"
            alt={recipe.title}
            height="80%"
            width="100%"
            style={{ objectFit: 'cover' }}
            image={recipe.image}
          />
        )}
        <CardContent sx={{ padding: 1, textAlign: 'center' }}>
          <Typography variant="h3" component="div" sx={{ color: 'primary.main',fontSize: '0.92rem', maxHeight: 50, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {recipe.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecipeCard;
