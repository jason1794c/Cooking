import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import uuid from 'uuid/v4'

export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    // Helper function that handles the changing inputs
    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    // Handle ingredient change function
    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange( { ingredients: newIngredients })
    }

    // Handle creating new ingredients
    function handleIngredientAdd() {
        const newIngredient = {
            id: uuid(),
            name: '',
            amount: ''
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id) {
        handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id)})
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button 
                    className="btn recipe-edit__remove-button"
                    onClick={() => handleRecipeSelect(undefined)}>
                    &times;
                </button>
            </div>
            <div className="recipe-edit__details-grid">
                <label 
                    htmlFor="name" 
                    className="recipe-edit__label">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="recipe-edit__input"
                    value={recipe.name}
                    onChange={e => handleChange({ name: e.target.value })} />
                <label 
                    htmlFor="addedBy"
                    className="recipe-edit__label">
                    Added by
                </label>
                <input 
                    type="text"
                    name="addedBy"
                    id="addedBy"
                    className="recipe-edit__input"
                    value={recipe.person}
                    onChange={e => handleChange({ person: e.target.value })} />
                <label 
                    htmlFor="cookTime"
                    className="recipe-edit__label">
                    Cook Time
                </label>
                <input 
                    type="text" 
                    name="cookTime"
                    id="cookTime"
                    className="recipe-edit__input"
                    value={recipe.cookTime}
                    onChange={e => handleChange({ cookTime: e.target.value })} />
                <label 
                    htmlFor="servings"
                    className="recipe-edit__label">
                    Servings
                </label>
                <input 
                    type="number" 
                    min="1" 
                    name="servings" 
                    id="servings"
                    className="recipe-edit__input"
                    value={recipe.servings}
                    onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })} />
                <label 
                    htmlFor="instructions"
                    className="recipe-edit__label">
                    Instructions
                </label>
                <textarea 
                    name="instructions"
                    className="recipe-edit__input"
                    onChange={e => handleChange({ instructions: e.target.value })}
                    value={recipe.instructions} 
                    id="instructions">
                </textarea>
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit 
                        key={ingredient.id}
                        handleIngredientChange={handleIngredientChange}
                        handleIngredientDelete={handleIngredientDelete}
                        ingredient={ingredient}
                    />
                ))}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button 
                    className="btn btn--primary"
                    onClick={() => handleIngredientAdd()}>
                    Add Ingredient
                </button>
            </div>
        </div>
    )
}
