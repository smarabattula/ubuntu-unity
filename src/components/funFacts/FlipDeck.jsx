// FlipDeck.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlipCard from './FlipCard';
import historicalPeopleData from './historicalPeopleData'; // Updated import

const FlipDeck = () => {
  // State for person facts and loading status
  const [personFacts, setPersonFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch person facts on component mount
  useEffect(() => {
    const fetchPersonFacts = async () => {
      // Extract names and image file names from historicalPeopleData
      const people = historicalPeopleData.map((person) => person.name);

      // Fetch person facts for each person in historicalPeopleData
      const fetchDataPromises = historicalPeopleData.map(async ({ name, imageFileName }) => {
        try {
          const response = await axios.get(`https://rest.blackhistoryapi.io/fact?people=${name}`, {
            headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
          });

          // Select a random fact for the person
          const facts = response.data.Results;
          const selectedFact = facts[Math.floor(Math.random() * facts.length)];

          // Return an object with person details and the selected fact
          return { name: name, imagePath: "/images/" + imageFileName, fact: selectedFact.text, tags: selectedFact.tags };
        } catch (error) {
          // Handle errors in fetching person facts
          console.error(`Error fetching person facts for ${name}`, error);
          return { name: name, fact: 'Error fetching data', tags: [] };
        }
      });

      try {
        // Wait for all fetches to complete and set person facts
        const factResults = await Promise.all(fetchDataPromises);
        setPersonFacts(factResults);
        setLoading(false);
      } catch (error) {
        // Handle errors in the overall fetching process
        console.error('Error fetching person facts', error);
        setLoading(false);
      }
    };

    // Invoke the fetch function
    fetchPersonFacts();
  }, []);

  // Render loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render the grid with FlipCards for each person
  return (
    <div className="grid-container">
      <div className="card-container">
        {personFacts.map((person, index) => (
          <FlipCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default FlipDeck;
