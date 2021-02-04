// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';
import React, { useEffect, useState } from "react";



const SearchPage = () => {

    const [count, setCount] = useState(0);

  
    const handleSearch = (e) => {
        e.preventDefault();
        setCount(count + 1);
        console.log(count + 'cliques');

    }
    

    return (
        <div>

            <Navbar />

            <button onClick={handleSearch}>Click?</button>

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