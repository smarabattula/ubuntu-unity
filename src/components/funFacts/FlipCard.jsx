// FlipCard.jsx
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import axios from 'axios';

import './flipCard.css';

const FlipCard = ({ person }) => {
  // Received person object
 

  // State for flipped status and fact
  const [isFlipped, setIsFlipped] = useState(false);
  const [fact, setFact] = useState(person.fact);

  // Animation controls
  const controls = useAnimation();

  // Handle click to flip the card
  const handleClick = async () => {
    // Fetch a new fact if not flipped
    if (!isFlipped) {
      const newFact = await fetchNewFact(person.name);
      setFact(newFact);
    }

    // Animate flip
    await controls.start({ rotateY: isFlipped ? 0 : 180 });
    setIsFlipped(!isFlipped);
  };

  // Fetch a new fact for the specified person
  const fetchNewFact = async (personName) => {
    try {
      const response = await axios.get(`https://rest.blackhistoryapi.io/fact?people=${personName}`, {
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
      });

      const facts = response.data.Results;
      const selectedFact = facts[Math.floor(Math.random() * facts.length)];
      return selectedFact.text;
    } catch (error) {
      console.error(`Error fetching new fact for ${personName}`, error);
      return 'Error fetching data';
    }
  };

  // Render the card
  return (
    <div className="card-container-item">
      {/* Card with motion animations */}
      <motion.div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} animate={controls}>
        {/* Front face of the card */}
        <motion.div className="card-face front">
          {/* Image container */}
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${person.imagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'whitesmoke',
              width: '100%',
              height: '100%',
            }}
          />
          <p>{person.name}</p>
        </motion.div>
        {/* Back face of the card */}
        {isFlipped && (
          <motion.div className="card-face back">
            <p style={{ color: 'Black' }}>{fact}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FlipCard;
