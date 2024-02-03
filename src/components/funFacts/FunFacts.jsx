// ./src/components/funFacts/FunFacts.jsx
import React from 'react';
import Container from '../common/SectionContainer';
import RandomFactCarousel from './RandomFactCarousel';
import FlipDeck from './FlipDeck'; 
import historicalPeopleData from './historicalPeopleData';

const FunFacts = () => { 
    return (
      <Container>
        {/* Displaying a random fact carousel */}
        <RandomFactCarousel />

        <div className="flex flex-wrap">
          {/* Passing historicalPeopleData as a prop to FlipDeck */}
          <FlipDeck key={1} historicalPeopleData={historicalPeopleData} />
        </div>
      </Container>
    );
  };
  
export default FunFacts;
