import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import recommender_icon from '../../images/recommender_icon.jpeg';
import blog_icon from '../../images/blog_icon.jpeg';
import recipes_icon from '../../images/recipe_icon.jpeg';
import quiz_icon from '../../images/quiz_icon.jpeg';

const Home = () => {
  return (
    <>
     {/* Hero Section */}
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            {/* Image Section */}
            <img
              src="images/HomePageImage.png"
              alt="Image of children learning"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            {/* Background Shape */}
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
  {/* Welcome Banner */}
  <div>
    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
      Welcome To
    </p>
  </div>
   {/* Main Content */}
  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
  Discover, Connect, Nourish: The Ubuntu Way
</h5>
{/* <p className="mb-5 text-gray-800">
  <span className="font-bold">At TBT Education</span>, we breathe life into learning with captivating activities designed for children aged 8-13. Dive into our platform and enjoy:
  <br /><br />
  <b>Fun Facts -</b> Black History interactive cards for an enlightening experience
  <br />
  <b>Weekly quizzes -</b> for an interactive challenge to test your knowledge
  <br />
  <b>Did You Know -</b> Discover fascinating facts on our YouTube video page
  <br />
  <b>Righteous Reading -</b> Embark on a literary journey by exploring our dedicated book page. Knowledge and inspiration at your fingertips!
  <br /><br />
  Discover the transformative power of focused learning, where each activity is a step towards unlocking their full potential.
  <br /><br />
  <span className="font-bold">Education that Inspires. Empowerment that Lasts. 🚀</span>
</p> */}
{/* Learn More Button */}
<div className="flex items-center">
  <Link
      to="/about" // Specify the path to the "About" page
      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
      Learn More
      <svg
        className="inline-block w-3 ml-2"
        fill="currentColor"
        viewBox="0 0 12 12"
      >
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
      </svg>
    </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Sections */}
      <div className="bg-gray-950">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          {/* Featured Content */}
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-gray-800"
            >
              {/* Circles for Background */}
              <circle
                fill="currentColor"
                fillOpacity="0.4"
                cx="44"
                cy="44"
                r="15.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          {/* Featured Links Did You Know */}
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/DidYouKnowTV" className="px-10 py-20 text-center transition duration-300 transform bg-blue-300 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src={recommender_icon} alt="Recommender" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Recommender
              </p>
            </Link>
            {/* Featured Link Fun Facts */}
            <Link to="/FunFacts" className="px-10 py-20 text-center transition duration-300 transform bg-fuchsia-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <img src={blog_icon} alt="Fun Facts Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Blog
              </p>
            </Link>
            {/* Featured Link Righteous Reading */}
            <Link to="/RighteousReading" className="px-10 py-20 text-center transition duration-300 transform bg-amber-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <img src={recipes_icon} alt="Righteous Reading Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Recipes
              </p>
            </Link>
            {/* Featured Link Weekly Quiz */}
            <Link to="/GetQuiz" className="px-10 py-20 text-center transition duration-300 transform bg-purple-300 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <img src={quiz_icon} alt="Weekly Quiz Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Quiz
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
