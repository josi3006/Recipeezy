// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useState } from "react";
import axios from 'axios';
require('dotenv').config();
// import StepsPage from './stepsComponent';



const SearchPage = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);
    const [clickedID, setClickedID] = useState("");

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
    const recipeData = {
        method: 'GET',
        url: 'https://webknox-recipes.p.rapidapi.com/recipes/' + clickedID + '/information',
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_key,
            'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com'
        }
    };



    const getIngredients = (e) => {
        e.preventDefault();
        console.log('Get URL string is ' + recipeData.url);
        axios.request(recipeData)
            .then((response) => {
                // setIngredientList(response.data.results.what);
                console.log('Axios results ' + response);
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
                {/* <button type="submit">GO!</button> */}
            </form>

            <button onClick={makeTheCall}>Search</button>


            <button onClick={getIngredients}>Show Ingredients</button>

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