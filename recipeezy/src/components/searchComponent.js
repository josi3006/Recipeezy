// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";
import axios from 'axios';



const SearchPage = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);


    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Here are the terms: ' + searchTerms);
    };


    const options = {
        method: 'GET',
        url: 'https://webknox-recipes.p.rapidapi.com/recipes/search',
        params: {
            query: searchTerms,
        },
        headers: {
            'x-rapidapi-key': '95c88ae2bbmsh9f3c0bf207b69b3p176cf9jsne229f6e467a1',
            'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com'
        }
    };

    const makeTheCall = () => {

        axios.request(options)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }



    // const makeTheCall = () => {
    //     axios.get(searchURL)
    //         .then((response) => {
    //             console.log(response);
    //         });
    // };



    // useEffect(() => {
    //     console.log('You want to search: ' + searchTerms)
    // }, [searchTerms]);



    return (
        <div>

            <Navbar />

            <button onClick={makeTheCall}>DO an AJAX call now</button>

            <form
                className="m-5"
                onSubmit={handleSearch}>
                <div className='row'>
                    <div className='col s12'>
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
                <button type="submit">GO!</button>
            </form>

            <div className='row' id="hitListRow">
                <div className='col' id="hitListCol">

                    {/* Search hit list renders here */}

                </div>
            </div>

        </div>
    );
}

export default SearchPage;