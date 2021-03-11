import './components.css';
import React from 'react';


function Navbar(props) {

    return (

        <div className="container-fluid navdiv">

            {/* <i className="material-icons-outlined icons" onClick={props.resetEverythingButton}>&#xe88a;</i> */}

            <i className="fi-xnluxl-home" onClick={props.resetEverythingButton}></i>


            { props.showHitListIcon ?
                <i className="material-icons-outlined icons" onClick={props.reShowHitListButton}>&#xe8fa;</i> : null}



            { props.showIngredientListIcon ?
                <i className="material-icons-outlined icons" onClick={props.showIngredientsButton}>&#xe547;</i> : null}

            { props.showRecipeStepsIcon ?
                <i className="material-icons-outlined icons" onClick={props.showRecipeStepsButton}>&#xe242;</i> : null}


        </div>


    );
}

export default Navbar;

