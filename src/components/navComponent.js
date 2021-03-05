import './components.css';
import React from 'react';


function Navbar(props) {

    return (

        <div className="container-fluid navdiv">

            <i className="material-icons-outlined" onClick={props.resetEverythingButton}>home</i>


            { props.showHitListIcon ?
                <i className="material-icons-outlined" onClick={props.reShowHitListButton}>youtube_searched_for</i> : null}

            { props.showIngredientListIcon ?
                <i className="material-icons-outlined" onClick={props.showIngredientsButton}>local_grocery_store</i> : null}

            { props.showRecipeStepsIcon ?
                <i className="material-icons-outlined" onClick={props.showRecipeStepsButton}>format_list_numbered</i> : null}


        </div>


    );
}

export default Navbar;

