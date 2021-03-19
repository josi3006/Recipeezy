import './components.css';
import React, { useState } from 'react';


function Navbar(props) {



    return (

        <div className="container-fluid navdiv">


            { console.log('Inside the navbar render statement ' + props.showRecipeStepsIcon)}


            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>


            {props.testVar ? (<p>It's true!</p>) : (<p>It not is true.</p>)}


            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null}

            {/* { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null} */}

{ props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons"></i>) : (<p>NO steps icon.</p>) }


            <button onClick={() => console.log('show me, homie ' + props.showRecipeStepsIcon)}>show me</button>

        </div>


    );
}

export default Navbar;

