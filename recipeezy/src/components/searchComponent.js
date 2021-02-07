// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";



const SearchPage = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);


    const handleSearch = (e) => {
        e.preventDefault();
       console.log('Here are the terms: ' + searchTerms);
    };



    // useEffect(() => {
    //     console.log('You want to search: ' + searchTerms)
    // }, [searchTerms]);



    return (
        <div>

            <Navbar />

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