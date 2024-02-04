import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';
import GlobalLayout from './components/common/GlobalLayout';
import Nav from './components/common/Nav';

import Home from './components/home/Home';
import About from './components/About/About';
import FunFacts from './components/funFacts/FunFacts';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Recipes from './components/recipe/Recipes';
import './index.css';
import './styles/tailwind.css';
import './styles/Nav.css';
import Footer from './components/common/Footer';
import GetQuiz from './components/weeklyQuiz/GetQuiz';
import recipes from './components/recipe/data';
import RecipeDetails from './components/recipe/RecipeDetails';
import RecipesPage from './components/recipe/RecipesPage';
// import Recipes from './components/recipe/Recipes';
// import recipes from './components/recipe/data';
// import RecipeDetails from './components/recipe/RecipeDetails';
// import RecipesPage from './components/recipe/RecipesPage';


function App() {
  return (
    <div>
    <div>
     <BrowserRouter>
     <GlobalLayout>
     <Nav />
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
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
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
