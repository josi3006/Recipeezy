import './components.css';
import React from 'react';


function Navbar(props) {

    return (

        <div className="container-fluid navdiv">

            <i className="material-icons-outlined" onClick={props.resetEverythingButton}>&#xe88a;</i>


            { props.showHitListIcon ?
                <i className="material-icons-outlined" onClick={props.reShowHitListButton}>&#xe8fa;</i> : null}

            { props.showIngredientListIcon ?
                <i className="material-icons-outlined" onClick={props.showIngredientsButton}>&#xe547;</i> : null}

            { props.showRecipeStepsIcon ?
                <i className="material-icons-outlined" onClick={props.showRecipeStepsButton}>&#xe242;</i> : null}


        </div>


    );
}

export default Navbar;

