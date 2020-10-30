import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuid from 'uuid/v4';


function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Intruct',
      ingredients: [
        {
          id: uuid(),
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }


  return (
    <RecipeList 
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd} />
  )
};

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]
export default App;
