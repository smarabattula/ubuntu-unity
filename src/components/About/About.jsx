import React from 'react';
import './About.css';
import image1 from './../../images/ed-3.png';
import image2 from './../../images/ed-6.png';
// import image3 from './../../images/screenshot2.png';
import icon1 from '../../images/dev1.png';
import icon2 from '../../images/dev2.png';
import icon3 from '../../images/dev3.png';
import icon4 from '../../images/dev4.png';


const About = () => {
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block  px-3 py-px mb-4 text-xs font-sans font-semibold tracking-wider text-[#292929] uppercase rounded-full bg-teal-accent-400">
                About Us
              </p>
            </div>
            <h2 className="max-w-lg mb-6 Welcome to the Ubuntu Unity App! font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to the Ubuntu Unity! 
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Our mission is to provide engaging and educational content related to Black History. Explore interesting facts, recommended blogs, recipes, quizzes and share what you have learnt.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
          
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={image1}
          alt="image of children"
        />
      </div>
    </div>

    {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 sm:text-4xl"
          >
            The Founder of The Badda Trust
          </a>
        </div>
        <p className="text-base font-sans  text-gray-700 md:text-lg">
        Born and raised in south London, award winning recording artist 2 Badda developed his craft as an M.C. His motivation derives from his life in London, his Jamaican roots, and the controversial issues that occur in his surrounding society. 
        </p>
      </div>
      <div className="mb-10 sm:text-center">
        <a  className="inline-block mb-1">
          <img
            alt="founder with students"
            src={image3}
            className="object-cover w-50 h-59 shadow-sm"
          />
        </a>
        <div>
        <p className="text-base font-sans  text-gray-700 md:text-lg">
        The Badda Trust is a prominent organisation in the community, providing alternative and necessary education with a focus on empowering  young people. The organisation specializes in the facilitation of FREE Saturday School Classes for all children aged 8 - 13 years old. Over the last two and a half years, The Badda Trust has successfully impacted the lives of dozens of young people in South London and in turn we have helped reduce violence in the area.
        </p>
        
        </div>
      </div>
      <div className="sm:text-center">
      </div>
    </div> */}


    <div className=" mt-3 relative">
      <img
        src={image2}
        className="absolute inset-0 object-cover w-full h-full"
        alt="image of girl smiling"
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-none">
                Want to get in touch?
              </h2>
              <p className='text-3xl font-sans font-bold text-[#E97451]'> Submit your name and email, we will reach out shortly!</p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-[#E97451] rounded shadow-2xl p-7 sm:p-10">
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      First name
                    </label>
                    <input
                      placeholder="Name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Last name
                    </label>
                    <input
                      placeholder="Surname"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="name@example.com"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-[#6dcf98] tracking-wide text-[#FFFFFF] transition duration-200 rounded shadow-md  hover:bg-[#262626] focus:shadow-outline focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{color: 'white'}}>
    <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-extrabold tracking-tight text-[#262626] sm:text-4xl sm:leading-none text-center">
        Meet Our Development Team...
    </h2>
    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg justify-center">
  <div>
    <img
      className="object-cover w-24 h-24 rounded-full shadow mx-auto my-auto"
      src={icon1}
      alt="Person"
    />
    <div className="flex flex-col items-center mt-2">
    <a  className='hover:text-[#e76d71] text-lg font-bold font-sans' href="https://github.com/RashmiD25" target="_blank" rel="noopener noreferrer ">Rashmi Datta</a>
      <p className="mb-4 text-xs font-sans font-bold text-gray-800">Grad student @ NC State</p>
      
    </div>
  </div>
  <div>
    <img
      className="object-cover w-24 h-24 rounded-full shadow mx-auto my-auto"
      src={icon2}
      alt="Person"
    />
    <div className="flex flex-col items-center mt-2">
    <a  className='hover:text-[#e76d71] text-lg font-bold font-sans' href="https://github.com/smarabattula" target="_blank" rel="noopener noreferrer">Sasank Marabattula</a>
    <p className="mb-4 text-xs font-sans font-bold text-gray-800">Grad student @ NC State</p>
    </div>
  </div>
  <div>
    <img
      className="object-cover w-24 h-24 rounded-full shadow mx-auto my-auto"
      src={icon3}
      alt="Person"
    />
    <div className="flex flex-col items-center mt-2">
    <a  className='hover:text-[#e76d71] text-lg font-bold font-sans' href="https://github.com/Hp-Harshitha-hp" target="_blank" rel="noopener noreferrer">Harshitha Paruchuri</a>
    <p className="mb-4 text-xs font-sans font-bold text-gray-800">Grad student @ NC State</p>
    </div>
  </div>
  <div>
    <img
      className="object-cover w-24 h-24 rounded-full shadow mx-auto my-auto"
      src={icon4}
      alt="Person"
    />
    <div className="flex flex-col items-center mt-2">
    <a className='hover:text-[#e76d71] text-lg font-bold font-sans' href="https://github.com/divitkalathil" target="_blank" rel="noopener noreferrer">Divit Kalathil</a>
    <p className="mb-4 text-xs font-sans font-bold text-gray-800">Grad student @ NC State</p>
      
    </div>
  </div>
</div>
</div>
</div>
  );
};
  

export default About;