// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from '/Users/divitkalathil/Desktop/ubuntu-unity/recipe-webpage/src/RecipeDetails.js';
import RecipesPage from '/Users/divitkalathil/Desktop/ubuntu-unity/recipe-webpage/src/RecipesPage.js';


function App() {
  const recipes = [
    {
      title: 'Jollof Rice',
      description: 'A popular West African dish made with rice, tomatoes, and various spices.',
      ingredients: [
        '2 cups long-grain parboiled rice',
        '1/4 cup vegetable oil',
        '1 onion, finely chopped',
        '2 red bell peppers, chopped',
        '3 tomatoes, blended',
        '2 cups chicken or vegetable broth',
        '1 teaspoon thyme',
        '1 teaspoon curry powder',
        '1 bay leaf',
        'Salt and pepper to taste',
      ], image: 'https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice.jpg',
      instructions: [
        'Rinse the rice and set aside.',
        'In a pot, heat the vegetable oil and sauté the chopped onion until golden brown.',
        'Add the chopped red bell peppers and cook for a few minutes.',
        'Stir in the blended tomatoes, chicken or vegetable broth, thyme, curry powder, bay leaf, salt, and pepper.',
        'Bring the mixture to a boil, then add the rinsed rice. Stir well.',
        'Cover the pot and simmer on low heat until the rice is cooked and the liquid is absorbed.',
        'Fluff the rice with a fork and serve hot.',
      ]
    },
    {
      title: 'Injera with Doro Wat',
      description: 'A traditional Ethiopian dish featuring sourdough flatbread and spicy chicken stew.',
      ingredients: [
        '2 cups teff flour',
        '3 cups water',
        '1/2 teaspoon salt',
        '1 cup all-purpose flour',
        '2 tablespoons olive oil',
        '1 onion, finely chopped',
        '2 cloves garlic, minced',
        '2 lbs chicken, cut into pieces',
        '2 tablespoons berbere spice',
        '1 teaspoon ground ginger',
        '1 teaspoon ground coriander',
        '1/2 teaspoon cardamom',
        '1 cup chicken broth',
        'Salt to taste',
      ], image: 'https://images.prismic.io/jewishfoodsociety/42fe0a0b-f641-4567-8ac2-ec3785baf226_Doro_Wat_178.jpg?auto=compress,format&rect=18,0,1164,800&w=1600&h=1100',
      instructions: [
        'In a bowl, mix the teff flour with water to form a batter. Let it ferment for 1-2 days.',
        'Add salt, all-purpose flour, and more water to achieve a pancake batter consistency.',
        'Cook injera on a hot, lightly oiled griddle.',
        'For Doro Wat, sauté chopped onion and garlic in olive oil until golden.',
        'Add chicken, berbere spice, ginger, coriander, cardamom, and salt. Cook until chicken is browned.',
        'Pour in chicken broth, cover, and simmer until the chicken is tender and the sauce thickens.',
        'Serve Doro Wat over injera.',
      ],
    },
    {
      title: 'Bobotie',
      description: 'A South African baked minced meat dish with an egg-based topping.',
      ingredients: [
        '1 kg ground beef or lamb',
        '1 onion, finely chopped',
        '2 slices white bread, soaked in milk',
        '2 tablespoons curry powder',
        '1 tablespoon apricot jam',
        '2 tablespoons chutney',
        '1/2 cup raisins',
        'Salt and pepper to taste',
        '3 eggs',
        '1.5 cups milk',
        'Bay leaves for garnish',
      ], image: 'https://tasteoftheplace.com/wp-content/uploads/2017/05/Bobotie-at-TasteOfThePlace.com-inline.jpg?ezimgfmt=ng:webp/ngcb1',
      instructions: [
        'Preheat the oven to 180°C (350°F).',
        'Sauté the chopped onion in a pan until translucent.',
        'In a large bowl, mix together ground meat, soaked bread, curry powder, apricot jam, chutney, raisins, salt, and pepper.',
        'Transfer the mixture to a baking dish and smooth the top.',
        'Beat eggs and milk together, then pour over the meat mixture. Place bay leaves on top.',
        'Bake for approximately 45 minutes or until the topping is set and golden brown.',
        'Serve Bobotie with rice or bread.',
      ],
    },     {
      "title": "Egusi Soup",
      "description": "A Nigerian soup made with ground melon seeds, vegetables, and meat or fish.",
      "ingredients": [
        "1 cup ground melon seeds",
        "2 cups chopped spinach or ugu leaves",
        "500g assorted meats (beef, goat meat, tripe)",
        "2 tablespoons palm oil",
        "1 onion, finely chopped",
        "2 tomatoes, diced",
        "2 tablespoons ground crayfish",
        "2 stock cubes",
        "Salt and pepper to taste"
      ], image: 'https://assets.epicurious.com/photos/5e2f6334b1633d0009d08cc4/4:3/w_3816,h_2862,c_limit/EgusiStew_HERO_011620_243.jpg',
      "instructions": [
        "In a pot, cook the assorted meats with chopped onions, stock cubes, and water until tender.",
        "Heat palm oil in a separate pot, add ground melon seeds, and stir-fry until slightly browned.",
        "Add diced tomatoes, chopped spinach or ugu leaves, ground crayfish, salt, and pepper. Stir well.",
        "Pour the cooked meats and broth into the pot. Simmer until the soup thickens.",
        "Adjust seasoning and serve hot with pounded yam or rice."
      ]
    },
    {
      "title": "Bunny Chow",
      "description": "A South African fast food dish consisting of a hollowed-out loaf of bread filled with curry.",
      "ingredients": [
        "4 small loaves of bread",
        "500g chicken or lamb, diced",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "2 tablespoons curry powder",
        "1 tablespoon vegetable oil",
        "1 cup chicken or vegetable broth",
        "Salt and pepper to taste"
      ], image: 'https://i1.wp.com/louskitchencorner.freybors.com/wp-content/uploads/2020/07/bunny-chow.png?fit=1024%2C819&ssl=1',
      "instructions": [
        "In a pan, heat oil and sauté chopped onions until golden brown.",
        "Add diced meat and curry powder. Cook until the meat is browned.",
        "Add chopped tomatoes, broth, salt, and pepper. Simmer until the curry thickens.",
        "Cut the tops off the loaves and hollow them out, leaving a bread shell.",
        "Fill each bread shell with the curry mixture. Serve hot."
      ]
    },
    {
      "title": "Atayef",
      "description": "Middle Eastern pancakes filled with sweet cheese, nuts, or cream.",
      "ingredients": [
        "2 cups all-purpose flour",
        "1 cup semolina",
        "1 teaspoon baking powder",
        "2 tablespoons sugar",
        "1 teaspoon yeast",
        "1.5 cups warm water",
        "1 cup sweet cheese or nuts for filling",
        "Vegetable oil for frying",
        "Sugar syrup for drizzling"
      ], image: 'https://www.simplyleb.com/wp-content/uploads/atayef-dessert-11-1.jpg',
      "instructions": [
        "In a bowl, mix flour, semolina, baking powder, sugar, yeast, and warm water. Allow the batter to rest for 30 minutes.",
        "Heat a non-stick pan and pour small circles of batter to make pancakes. Cook until bubbles form on the surface, then flip and cook the other side.",
        "Place a spoonful of sweet cheese or nuts in the center of each pancake. Fold in half to create a half-moon shape.",
        "Seal the edges and fry the filled pancakes until golden brown.",
        "Drizzle with sugar syrup before serving."
      ]
    },
    {
      "title": "Chakalaka",
      "description": "A South African vegetable relish with a spicy flavor, often served with bread or grilled meats.",
      "ingredients": [
        "2 tablespoons vegetable oil",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 red bell pepper, diced",
        "1 green bell pepper, diced",
        "2 carrots, grated",
        "1 can (400g) baked beans in tomato sauce",
        "1 can (400g) chopped tomatoes",
        "2 teaspoons curry powder",
        "1 teaspoon paprika",
        "Salt and pepper to taste"
      ], image: 'https://africanbites.com/wp-content/uploads/2014/11/IMG_4999.jpg',
      "instructions": [
        "In a pan, heat vegetable oil and sauté chopped onions and garlic until soft.",
        "Add diced red and green bell peppers, grated carrots, baked beans, and chopped tomatoes. Stir well.",
        "Season with curry powder, paprika, salt, and pepper. Simmer until the vegetables are tender.",
        "Serve chakalaka warm as a side dish or condiment."
      ]
    },
    {
      "title": "Moambe Chicken",
      "description": "A traditional Central African dish featuring chicken cooked in a rich and spicy palm nut sauce.",
      "ingredients": [
        "1 whole chicken, cut into pieces",
        "2 cups palm nut pulp",
        "1 onion, finely chopped",
        "2 tomatoes, blended",
        "2 red bell peppers, blended",
        "2 tablespoons vegetable oil",
        "2 cloves garlic, minced",
        "2 teaspoons ground ginger",
        "2 teaspoons ground coriander",
        "1 teaspoon cayenne pepper",
        "Salt to taste"
      ], image: 'https://i2.wp.com/illinifightinghunger.org/wp-content/uploads/2016/01/CongoChickenMoame-560wm.jpg',
      "instructions": [
        "In a pot, heat vegetable oil and sauté chopped onions and minced garlic until golden brown.",
        "Add chicken pieces and brown on all sides.",
        "Mix palm nut pulp, blended tomatoes, blended red bell peppers, ground ginger, ground coriander, cayenne pepper, and salt.",
        "Pour the palm nut mixture over the chicken. Simmer until the chicken is cooked through and the sauce thickens.",
        "Serve moambe chicken with rice or fufu."
      ]
    },
    {
      "title": "Dibi",
      "description": "Senegalese grilled lamb skewers marinated in a flavorful spice blend.",
      "ingredients": [
        "2 lbs lamb shoulder, cut into cubes",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 tablespoon Dijon mustard",
        "2 teaspoons ground cayenne pepper",
        "2 teaspoons paprika",
        "1 teaspoon thyme",
        "1 teaspoon ground black pepper",
        "1/4 cup vegetable oil",
        "Salt to taste",
        "Wooden skewers, soaked in water"
      ], image: 'https://i.ytimg.com/vi/6yaw1ezjkm8/maxresdefault.jpg',
      "instructions": [
        "In a bowl, mix chopped onions, minced garlic, Dijon mustard, cayenne pepper, paprika, thyme, black pepper, vegetable oil, and salt.",
        "Marinate lamb cubes in the spice mixture for at least 2 hours or overnight.",
        "Thread marinated lamb onto soaked wooden skewers.",
        "Grill the skewers over medium-high heat until the lamb is cooked and has a nice char.",
        "Serve dibi with grilled vegetables or rice."
      ]
    },
    {
      "title": "Biltong",
      "description": "A South African cured and air-dried meat snack, often made with beef or game meats.",
      "ingredients": [
        "2 lbs beef or game meat, thinly sliced",
        "1 cup red wine vinegar",
        "1/4 cup Worcestershire sauce",
        "1/4 cup coarse salt",
        "2 tablespoons ground black pepper",
        "2 tablespoons coriander seeds, crushed",
        "1 tablespoon brown sugar",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1 teaspoon paprika"
      ], image: 'https://www.greedyferret.com/wp-content/uploads/2020/10/perfect-biltong-slices-on-chopping-board-500x485.jpg',
      "instructions": [
        "In a bowl, mix red wine vinegar, Worcestershire sauce, coarse salt, ground black pepper, crushed coriander seeds, brown sugar, garlic powder, onion powder, and paprika.",
        "Place the thinly sliced meat in the marinade, ensuring each piece is coated. Refrigerate for at least 4 hours or overnight.",
        "Preheat the oven to 160°C (320°F). Remove the meat from the marinade and pat dry.",
        "Hang the meat in a well-ventilated area or use a food dehydrator until it reaches your desired dryness.",
        "Slice and enjoy the biltong as a snack."
      ]
    },
    {
      "title": "Fufu",
      "description": "A starchy side dish common in many West and Central African countries, often served with soups or stews.",
      "ingredients": [
        "2 cups cassava, peeled and cubed",
        "2 cups plantains, peeled and sliced",
        "Water for boiling"
      ], image: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/90bc30fa846d4eef9c3f57c1ef5b77b0.jpeg?resize=1200:*&output-format=jpg&output-quality=auto',
      "instructions": [
        "Boil the cassava and plantains in a pot of water until tender.",
        "Drain the water and mash the cassava and plantains together until a smooth and stretchy dough-like consistency is achieved.",
        "Serve the fufu in balls or mounds alongside your favorite soup or stew."
      ]
    },
    {
      "title": "Chapati",
      "description": "A type of unleavened flatbread that is popular in East Africa.",
      "ingredients": [
        "2 cups all-purpose flour",
        "1 cup warm water",
        "1 tablespoon vegetable oil",
        "1 teaspoon salt",
        "Extra flour for dusting"
      ], image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chapati-recipe.jpg',
      "instructions": [
        "In a bowl, combine all-purpose flour, salt, and vegetable oil.",
        "Gradually add warm water and knead the mixture into a soft, non-sticky dough.",
        "Divide the dough into small balls. Roll each ball into a thin, round flatbread using extra flour for dusting.",
        "Heat a griddle or skillet over medium heat. Cook each chapati for about 1-2 minutes on each side until golden brown spots appear.",
        "Serve chapati warm with your favorite curry or stew."
      ]
    },
    {
      "title": "Pepper Soup",
      "description": "A spicy and flavorful soup common in many West African countries, often made with fish or meat.",
      "ingredients": [
        "1 lb fish or meat of your choice, cut into pieces",
        "1 onion, finely chopped",
        "2 tomatoes, diced",
        "2 bell peppers, sliced",
        "2 tablespoons ground pepper soup spices",
        "1 tablespoon ground crayfish",
        "2 tablespoons palm oil",
        "4 cups water or broth",
        "Salt and pepper to taste",
        "Fresh herbs for garnish (e.g., scent leaves or basil)"
      ], image: 'https://www.seriouseats.com/thmb/93j0_6zLPZiwj22ac-ZYcDGOi9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220425-peppersoup-Maureen-Celestine-23-hero-01-9e718e54b58b4b19af8b6f7011ca7b16.JPG',
      "instructions": [
        "In a pot, heat palm oil and sauté chopped onions until golden brown.",
        "Add diced tomatoes, sliced bell peppers, and ground pepper soup spices. Cook until the vegetables are softened.",
        "Add water or broth, ground crayfish, salt, and pepper. Bring to a boil.",
        "Add fish or meat pieces and simmer until cooked through.",
        "Garnish with fresh herbs and serve the pepper soup hot."
      ]
    }


  ];


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RecipesPage recipes={recipes} />} />
          <Route path="/recipe/:recipeTitle" element={<RecipeDetails recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

