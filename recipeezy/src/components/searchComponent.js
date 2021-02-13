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

    const makeTheCall = (e) => {
        e.preventDefault();
        console.log('The password is... ' + process.env.REACT_APP_API_key);
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
                                    <li><small><a href={hitItem.sourceUrl}>{hitItem.sourceUrl}</a></small></li>

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


            <div className='row' id="hitListRow">
                <div className='col' id="hitListCol">


                    <ul>
                    </ul>
                    {/* Search hit list renders here */}

                </div>
            </div>

        </div>
    );
}

export default SearchPage;