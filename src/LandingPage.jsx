// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalLayout from './components/common/GlobalLayout';
import Home from './components/home/Home';
import About from './components/About/About';
import FunFacts from './components/funFacts/FunFacts';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Nav from './components/common/Nav';
import './index.css';
import './styles/tailwind.css';
import './styles/Nav.css';
import Footer from './components/common/Footer';
import GetQuiz from './components/weeklyQuiz/GetQuiz';

const LandingPage = () => {
  return (
    <Router >

    </Router>
  );
}

export default LandingPage;
