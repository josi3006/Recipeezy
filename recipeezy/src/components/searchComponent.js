// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";



const SearchPage = () => {

    const [count, setCount] = useState(0);
    const [searchTerms, setSearchTerms] = useState("");


    const clickCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
        console.log(count + ' cliques');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerms(searchTerms);
        console.log('You want to search: ' + searchTerms);

    }

    return (
        <div>

            <Navbar />

            <button onClick={clickCount}>Click?</button>

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

            {/* <form
                className='mt-5 py-5 px-5'
                autoComplete='off'
                onSubmit={this.handleSearch}>


                <div className='row'>
                    <div className='col s12'>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                placeholder='Email'
                                name='email'
                                type='email'
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                    </div>
                </div>

            </form> */}

        </div>
    );
}

export default SearchPage;