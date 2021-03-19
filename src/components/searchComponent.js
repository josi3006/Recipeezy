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
    const [showRecipeStepsIcon, setShowRecipeStepsIcon] = useState(false);
    const [showIngredientListIcon, setShowIngredientListIcon] = useState(false);

    const [testVar, setTestVar] = useState(false);



    // Navigation functions triggered by button clicks

    const searchButton = () => {
        setShowHitListIcon(true);
        makeTheCall();
        setShowSearchBar(false);
        setShowHitList(true);
    };

    const hitItemClicked = () => {
        getRecipeData();
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
                setShowIngredientListIcon(true);
                setShowRecipeStepsIcon(true);
                setTestVar(true);
                console.log('in axios call ' + showRecipeStepsIcon);
                setRecipeIngredients(response.data.extendedIngredients);
                setRecipeSteps(response.data.analyzedInstructions[0].steps);
            })
            .then(() => {


                setShowHitList(false);
                setShowIngredientList(true);
                setShowRecipeSteps(true);
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
                resetEverythingButton={resetEverythingButton}
                testVar={testVar}
            />



            {/* This maps SEARCH HIT list to page */}
            { showHitList ?
                <div className="contentdiv">
                    <ul>
                        {Object.keys(hitList).map((key) => {
                            const hitItem = hitList[key];
                            return (
                                <div key={hitItem.id}>


                                    <li onClick={() => setClickedID(hitItem.id)}>
                                        {hitItem.title}<br />
                                        <p className="urltext">{hitItem.sourceUrl}</p>
                                    </li>



                                </div>
                            );
                        })}
                    </ul></div> : null}

            {/* <button onClick={() => setTestVar(true)}>ChangeIt</button> */}


            {/* This maps recipe INGREDIENTS list to page */}
            {showIngredientList ? <IngredientsPage recipeIngredients={recipeIngredients} /> : null}


            {/* This maps recipe STEPS list to page */}
            {showRecipeSteps ? <StepsPage recipeSteps={recipeSteps} /> : null}


            {/* This is the search form */}
            {showSearchBar ?
                <form>

                    <div className='form-group'>
                        <input
                            className='form-control textinput'
                            placeholder='Search'
                            onChange={(event) => setSearchTerms(event.currentTarget.value)}
                            name='searchterms'
                            id='searchtermsbox'
                            value={searchTerms}
                            aria-label='Enter Search Terms Here'
                        />
                    </div>


                    <div
                        className="buttondiv"
                        onClick={searchButton}>Search
                    </div>

                </form> : null}



        </div >

    );
}

export default SearchPage;