import React from 'react';
// This is the code for the function to execute, render and display outputs to the page
const FeatureBookCard = () => {
  return (
    <div className="hero-section bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-white p-8 mb-8 flex flex-col-reverse md:flex-row justify-around items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 md:ml-10">Freestyle Saga - Part One</h2>
        <div className="text-description mt-10 md:ml-10 md:mr-10">
          <p>
            In part one of this autobiographical collection of rhymes, '2 Badda' fearlessly ignites discussion and sparks transformative change through his mind-blowing, uncensored freestyles, taking the nation by storm with his unapologetically honest approach and hard-hitting truths. '2 Badda' challenges the status quo, inspiring a revolutionary movement of people who refuse to be silenced. Brace yourself to be taken on a heart-wrenching journey, as you uncover the real stories and life experiences of this remarkable and prolific artist, through his powerful words that will linger long after you turn the final page.
          </p>
        </div>
        <a href="https://2badda.com/products/freestyle-saga-part-one" className="block" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-10 md:ml-10">
            Get Book
          </button>
        </a>
      </div>
      <a href="https://2badda.com/products/freestyle-saga-part-one" className="block" target="_blank" rel="noopener noreferrer">
        <div className="w-full md:w-full md:mr-10 flex justify-around"> {/* Adjusted class to justify-end */}
          <img
            className="object-cover object-center w-full max-w-md md:max-w-xs shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-4 ring-red-400"
            src="/images/BlackandYellowGeniusAutobiographyBookCover.png"
            alt="Featured Book"
          />
        </div>
      </a>
    </div>
  );
};

export default FeatureBookCard;
