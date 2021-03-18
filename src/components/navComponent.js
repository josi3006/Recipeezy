import './components.css';
import React, { useState } from 'react';


function Navbar(props) {

const [testVar, setTestVar] = useState(false);


    return (

        <div className="container-fluid navdiv">

            <button onClick={() => setTestVar(true)}>ChangeIt</button>

            { console.log('Inside the navbar render statement ' + props.showRecipeStepsIcon)}


            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>


            {testVar ? (<p>It's true!</p>) : (<p>It not is true.</p>)}


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

