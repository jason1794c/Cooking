import React, { useState, useEffect, useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext)
    const [search, setSearch] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState()
    
    useEffect(() => {
        setFilteredRecipes(recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, recipes])

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return (
        <>
            <div className="search-bar">
                <label htmlFor="search">Search: </label>
                <input 
                    type="text" 
                    id="search"
                    value={search} 
                    placeholder='Search for a recipe' 
                    onChange={(event) => handleSearch(event)} />
            </div>
            <div className="recipe-list">
                <div>
                    {search ? filteredRecipes.map(recipe => {
                        return (
                            <Recipe key={recipe.id} {...recipe} />
                        )}) : recipes.map(recipe => {
                        return (
                            <Recipe key={recipe.id} {...recipe} />
                        )
                    })}
                </div>
                <div className="recipe-list__add-recipe-btn-container">
                    <button
                        className="btn btn--primary"
                        onClick={handleRecipeAdd}
                    >
                        Add Recipe
                    </button>
                </div>
            </div>
        </>
    )
}