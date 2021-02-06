// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";



const SearchPage = () => {

    const [count, setCount] = useState(0);
    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);


    const testHitList = (e) => {
        e.preventDefault();
        setHitList(['foo', 'bar', 'baz', 'qux']);

        console.log('listy is: ' + hitList)
    };




    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerms(searchTerms);
        console.log('You want to search: ' + searchTerms);

    }

    return (
        <div>

            <Navbar />

            <button onClick={testHitList}>Click for hit list</button>

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