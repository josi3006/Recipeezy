// import './App.css';
import './components.css';
import React from 'react';
import { Link } from "react-router-dom";




function Navbar() {



    return (

        <div class="container navdiv">

               
                    <Link to="/"><i class="material-icons-outlined">home</i></Link>
                    <Link to="/ingredients"><i class="material-icons-outlined">local_grocery_store</i></Link>
                    <Link to="/steps"><i class="material-icons-outlined">format_list_numbered</i></Link>
             



        </div>


    );
}

export default Navbar;

