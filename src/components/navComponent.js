import './components.css';
import React, { useState } from 'react';


function Navbar(props) {

    let iconClass;
    props.showRecipeStepsIcon
        ? (iconClass = "fi-xnluxl-home icons")
        : (iconClass = "fi-xnluhl-shopping-cart icons")


    return (

        <div className="container-fluid navdiv">


            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>
            <i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>
            <i className="fi-xnluxl-ordered-list icons"></i>

            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null}

            {/* { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null} */}

            <i className={iconClass}></i>


        </div>


    );
}

export default Navbar;

