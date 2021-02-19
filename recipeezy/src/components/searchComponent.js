// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useState } from "react";
import axios from 'axios';
import StepsPage from './stepsComponent';
import IngredientsPage from './ingredientsComponent';

require('dotenv').config();



const SearchPage = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);
    const [clickedID, setClickedID] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState([""]);
    const [recipeSteps, setRecipeSteps] = useState([""]);
    const [showHitList, setShowHitList] = useState(false);
    const [showRecipeSteps, setShowRecipeSteps] = useState(false);
    const [showIngredientList, setShowIngredientList] = useState(false);

    const clickToShow = () => {
        setShowIngredientList(true)
    };

    // Options to SEARCH the API for recipes
    const searchOptions = {
        method: 'GET',
        url: 'https://webknox-recipes.p.rapidapi.com/recipes/search',
        params: {
            query: searchTerms,
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_key,
            'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com'
        }
    };


    // Options to Get recipe data after choosing a recipe
    const recipeDataCall = {
        method: 'GET',
        url: 'https://webknox-recipes.p.rapidapi.com/recipes/' + clickedID + '/information',
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_key,
            'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com'
        }
    };


    // API call to get data for our chosen recipe
    const getRecipeData = (e) => {
        e.preventDefault();
        axios.request(recipeDataCall)
            .then((response) => {
                setRecipeIngredients(response.data.extendedIngredients);
                setRecipeSteps(response.data.analyzedInstructions[0].steps);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // API call to search all recipes
    const makeTheCall = (e) => {
        e.preventDefault();
        axios.request(searchOptions)
            .then((response) => {
                setHitList(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });

    }


    return (

        <div>

            <Navbar />


            {/* This maps SEARCH HIT list to page */}
            <ul>
                {Object.keys(hitList).map((key) => {
                    const hitItem = hitList[key];
                    return (
                        <div key={hitItem.id}>
                            <div>
                                <div>
                                    <li>{hitItem.title}</li>
                                    <li
                                        onClick={() => setClickedID(hitItem.id)}>
                                        <small>{hitItem.sourceUrl}</small>
                                    </li>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </ul>





            {/* This maps recipe INGREDIENTS list to page */}
            { showIngredientList ? <IngredientsPage recipeIngredients={recipeIngredients} /> : null}

            <button onClick={clickToShow}>Show Ingredients</button>



            {/* This maps recipe STEPS list to page */}
            <ul>
                {Object.keys(recipeSteps).map((key) => {
                    const recipeStep = recipeSteps[key];
                    return (
                        <div key={recipeStep.number}>
                            <div>
                                <div>


                                    <li>{recipeStep.step}</li>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </ul>


            <form className="m-5">
                <div className='row d-flex justify-content-center'>
                    <div className='col s12 narrow'>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                placeholder='Search'
                                onChange={(event) => setSearchTerms(event.currentTarget.value)}
                                name='searchterms'
                                id='searchtermsbox'
                                value={searchTerms}
                            />
                        </div>
                    </div>
                </div>
            </form>

            <button onClick={makeTheCall}>Search All Recipes</button>


            <button onClick={getRecipeData}>Show Our Recipe's Data</button>

            <div className='row' id="hitListRow">
                <div className='col' id="hitListCol">


                    <ul>
                    </ul>
                    {/* Search hit list renders here */}

                </div>
            </div>

        </div >
    );
}

export default SearchPage;