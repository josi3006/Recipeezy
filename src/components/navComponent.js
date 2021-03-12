import './components.css';
import React from 'react';


function Navbar(props) {

    return (

        <div className="container-fluid navdiv">

            {/* <i className="material-icons-outlined icons" onClick={props.resetEverythingButton}>&#xe88a;</i> */}

            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>


            { props.showHitListIcon ?
                <i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i> : null}


            { props.showIngredientListIcon ?
                <i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i> : null}

            { props.showRecipeStepsIcon ?
                <i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i> : null}


            <i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>

        </div>


    );
}

export default Navbar;

