import './components.css';
import React, { useState } from 'react';


function Navbar(props) {



    return (

        <div className="container-fluid navdiv">



            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>
            <i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>
            <i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>
            <i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>

            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null}

            {/* { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null} */}

            { props.showRecipeStepsIcon ?
                (<img src="https://via.placeholder.com/40" />) : (<p>NO steps icon.</p>)}



        </div>


    );
}

export default Navbar;

