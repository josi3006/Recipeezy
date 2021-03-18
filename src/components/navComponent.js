import './components.css';
import React from 'react';


function Navbar(props) {

const testVar = true;


    return (

        <div className="container-fluid navdiv">

            { console.log('Inside the navbar render statement ' + props.showRecipeStepsIcon)}


            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>


            {testVar ? console.log('testVar is true!') : console.log('testVar not is true.')}


            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null}

            { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null}


            <button onClick={() => console.log('show me, homie ' + props.showRecipeStepsIcon)}>show me</button>

        </div>


    );
}

export default Navbar;

