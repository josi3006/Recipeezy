// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import StepsPage from './stepsComponent';



const SearchPage = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [hitList, setHitList] = useState([""]);
    const [testProp, setTestProp] = useState("");


    const sendIt = () => {
        setTestProp('sup');
    }


    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Here are the terms: ' + searchTerms);
    };


    const searchOptions = {
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

    const makeTheCall = (e) => {
        e.preventDefault();

        axios.request(searchOptions)
            .then((response) => {
                // console.log(response.data.results[0].title);
                console.log('in axios ' + response.data.results[0].title);
                console.log('in axios just data' + response.data);
                console.log('as JSON ' + JSON.stringify(response.data.results))
                setHitList(response.data.results);
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

    // useEffect(() => {
    //     console.log('in useEffect' + JSON.stringify(hitList.results[0]))
    // },
    //     [hitList]);

    useEffect(() => {
        console.log('console says ' + testProp);
    }, [testProp]);




    return (

        <div>


            <StepsPage message="I made it!" />

            <button onClick={sendIt}>Send. It.</button>

            <button onClick={makeTheCall}>DO an AJAX call now</button>







            
			{Object.keys(hitList).map((key) => {
				const hitItem = hitList[key];

				return (
					<div key={hitItem.id}>
						<div>
							<div>
								<h4>{hitItem.title}</h4><br />
                                {hitItem.sourceUrl}	<br /><br />						

							</div>
						</div>
					</div>
				);
			})}






            <form
                className="m-5"
                onSubmit={handleSearch}>
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
                <button type="submit">GO!</button>
            </form>

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