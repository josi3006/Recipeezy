import './components.css';
import React, { useState } from 'react';


function Navbar(props) {

    const iconPicker = () => {
        let icon;
        props.showRecipeStepsIcon
            ? icon = "<i className='fi-xnluxl-ordered-list icons'></i>"
            : icon = null;
    }

    return (

        <div className="container-fluid navdiv">

            {iconPicker()}

            <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>
            <i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>
            <i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>
            <i className="fi-xnluxl-ordered-list icons"></i>

            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null}

            {/* { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null} */}

            {/* <i className={props.showRecipeStepsIcon ? "fi-xnluxl-ordered-list icons" : "fi-xnluxl-home icons"}></i> */}

            {icon}

        </div>


    );
}

export default Navbar;

