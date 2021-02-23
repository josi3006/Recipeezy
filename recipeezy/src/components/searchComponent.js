import Navbar from './navComponent';
import React, { useState, useEffect } from "react";
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
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [showHitList, setShowHitList] = useState(false);
    const [showRecipeSteps, setShowRecipeSteps] = useState(false);
    const [showIngredientList, setShowIngredientList] = useState(false);
    const [showHitListIcon, setShowHitListIcon] = useState(false);
    const [showIngredientListIcon, setShowIngredientListIcon] = useState(false);
    const [showRecipeStepsIcon, setShowRecipeStepsIcon] = useState(false);



    // Navigation functions triggered by button clicks

    const searchButton = () => {
        makeTheCall();
        setShowSearchBar(false);
        setShowHitList(true);
        setShowHitListIcon(true);
    };

    const hitItemClicked = () => {
        getRecipeData();
        setShowHitList(false);
        setShowIngredientList(true);
        // setShowIngredientListIcon(true);
        setShowRecipeSteps(true);
        // setShowRecipeStepsIcon(true);
    };



    useEffect(() => {
        hitItemClicked();
    }, [clickedID]);

    const reShowHitListButton = () => {
        setShowIngredientList(false);
        setShowRecipeSteps(false);
        setShowHitList(true);
    };

    const showIngredientsButton = () => {
        setShowHitList(false);
        setShowRecipeSteps(false);
        setShowSearchBar(false);
        setShowIngredientList(true);
    };

    const showRecipeStepsButton = () => {
        setShowHitList(false);
        setShowIngredientList(false);
        setShowSearchBar(false);
        setShowRecipeSteps(true);
    };

    const resetEverythingButton = () => {
        window.location.reload();
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
    const getRecipeData = () => {
        axios.request(recipeDataCall)
            .then((response) => {
                setRecipeIngredients(response.data.extendedIngredients);
                setRecipeSteps(response.data.analyzedInstructions[0].steps);
                setShowIngredientListIcon(true);
                setShowRecipeStepsIcon(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    // API call to search all recipes
    const makeTheCall = () => {
        axios.request(searchOptions)
            .then((response) => {
                setHitList(response.data.results);
                console.log(response.data.results)
            })
            .catch((error) => {
                console.error(error);
            });

    }


    return (

        <div>



            <Navbar
                showHitListIcon={showHitListIcon}
                showIngredientListIcon={showIngredientListIcon}
                showRecipeStepsIcon={showRecipeStepsIcon}
                reShowHitListButton={reShowHitListButton}
                showIngredientsButton={showIngredientsButton}
                showRecipeStepsButton={showRecipeStepsButton}
                resetEverythingButton={resetEverythingButton} />




            {/* This maps SEARCH HIT list to page */}
            { showHitList ?
                <ul>
                    {Object.keys(hitList).map((key) => {
                        const hitItem = hitList[key];
                        return (
                            <div>
                                {/* <li key={hitItem.id}>{hitItem.title}</li>
                                <li key={hitItem.id}
                                    onClick={() => setClickedID(hitItem.id)}>
                                    <small>{hitItem.sourceUrl}</small>
                                </li> */}

                                <li key={hitItem.id} onClick={() => setClickedID(hitItem.id)}>
                                    {hitItem.title}<br />
                                    <small>{hitItem.sourceUrl}</small>
                                </li>



                            </div>
                        );
                    })}
                </ul> : null}


            {/* This maps recipe INGREDIENTS list to page */}
            {showIngredientList ? <IngredientsPage recipeIngredients={recipeIngredients} /> : null}


            {/* This maps recipe STEPS list to page */}
            {showRecipeSteps ? <StepsPage recipeSteps={recipeSteps} /> : null}


            {/* This is the search form */}
            {showSearchBar ?
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

                    <button onClick={searchButton}>Search</button>

                </form> : null}



        </div >
    );
}

export default SearchPage;