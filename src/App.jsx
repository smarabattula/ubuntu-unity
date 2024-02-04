// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalLayout from './components/common/GlobalLayout';
import Home from './components/home/Home';
import About from './components/About/About';
import FunFacts from './components/funFacts/FunFacts';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Recipes from './components/recipe/Recipes';
import Nav from './components/common/Nav';
import './index.css';
import './styles/tailwind.css';
import './styles/Nav.css';
import Footer from './components/common/Footer';
import GetQuiz from './components/weeklyQuiz/GetQuiz';
import recipes from './components/recipe/data';
import RecipeDetails from './components/recipe/RecipeDetails';
import RecipesPage from './components/recipe/RecipesPage';

const App = () => {
  return (
    <Router >
      <GlobalLayout>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/funFacts" element={<FunFacts />} />
              <Route path="/getQuiz" element={<GetQuiz />} />
              <Route path="/didYouKnowTV" element={<DidYouKnowTV />} />
              <Route path="/righteousReading" element={<RighteousReading />} />
              <Route path="/recipes/*" element={<Recipes />}>
                <Route path="" element={<RecipesPage recipes={recipes} />} />
                {
                  recipes.map((recipe, index) => {
                    return <Route key={index} path={`${recipe.title.toLowerCase().replace(/\s+/g, '-')}`} element={<RecipeDetails recipe={recipe} />} />
                  })
                }
              </Route>
            </Routes>
            
          <Footer />
       
      </GlobalLayout>
    </Router>
  );
}

export default App;
