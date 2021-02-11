// import './App.css';
import './components.css';
import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    return (

        <div className="container-fluid navdiv">

            <Link to="/"><i className="material-icons-outlined">home</i></Link>
            <Link to="/ingredients"><i className="material-icons-outlined">local_grocery_store</i></Link>
            <Link to="/steps"><i className="material-icons-outlined">format_list_numbered</i></Link>
        
        </div>


    );
}

export default Navbar;

