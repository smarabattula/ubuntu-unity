import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Footer.css';
import youtubeIcon from "./../../images/youtube.png";
import instagramIcon from "./../../images/instagram.png";
import githubIcon from "./../../images/github.png";

const Footer = () => {
  return (
    <footer className="bg-[#50C878] p-2 border-solid border-[#262626]">
      <div className="flex flex-col items-center mb-4">
        <span className="font-sans text-3xl font-extrabold tracking-tight text-[#262626] mb-2">
          Ubuntu Unity
        </span>

        <div className="flex">
          <Link to="/home" className="whitespace-nowrap font-bold font-sans text-[#262626] hover:text-[#E97451] mx-2">
            Home
          </Link>
          <Link to="/About" className="whitespace-nowrap font-bold font-sans text-[#262626] hover:text-[#E97451] mx-2">
            About Us
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-center items-center mb-4">
        <a href="https://youtube.com/@2baddaDidYouKnow" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="h-8 w-8 rounded-full mx-1" />
        </a>
        <a href="https://instagram.com/2badda" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8 rounded-full mx-1" />
        </a>
        <a href="https://github.com/ClaireFraser121/tbt-education-app" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="h-8 w-8 rounded-full mx-1" />
        </a>
      </div> */}

      <p className="text-sm text-center font-bold font-sans text-[#262626]">&copy; 2024 Ubuntu Unity App</p>
    </footer>
  );
}

export default Footer;
