import './components.css';
import React, { useState } from 'react';
import { ReactComponent as HomeIconSVG } from '../images/home-black-48dp.svg';





function Navbar(props) {


    const showMe = () => {
        props.showRecipeStepsIcon ?
            console.log('Yes Icon!') : console.log('No Is Icon.')
    }

    return (

        <div className="container-fluid navdiv">

            <HomeIconSVG
                fill="currentColor"
                // className="icons"
                style={{color: "#4bccff"}}

            />

            <button onClick={showMe} />

            { props.showRecipeStepsIcon ?
                <p>Yes Is Icon!</p> :
                <p>No Icon No.</p>}


            {/* <i className="fi-xnluxl-home icons" onClick={props.resetEverythingButton}></i>
            <i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>
            <i className="fi-xnluxl-ordered-list icons"></i>

            { props.showHitListIcon ?
                (<i className="fi-xnluxl-link icons" onClick={props.reShowHitListButton}></i>) : null}


            { props.showIngredientListIcon ?
                (<i className="fi-xnluhl-shopping-cart icons" onClick={props.showIngredientsButton}></i>) : null} */}

            {/* { props.showRecipeStepsIcon ?
                (<i className="fi-xnluxl-ordered-list icons" onClick={props.showRecipeStepsButton}></i>) : null} */}



        </div>


    );
}

export default Navbar;

