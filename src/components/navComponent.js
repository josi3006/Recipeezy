import './components.css';
import React, { useState } from 'react';
import { ReactComponent as HomeIconSVG } from '../images/home-black-48dp.svg';
import { ReactComponent as HitlistIconSVG } from '../images/youtube_searched_for-black-48dp.svg';
import { ReactComponent as IngredientListIconSVG } from '../images/shopping_cart-black-48dp.svg';
import { ReactComponent as RecipeStepsIconSVG } from '../images/format_list_numbered-black-48dp.svg';





function Navbar(props) {


    const showMe = () => {
        props.showRecipeStepsIcon ?
            console.log('Yes Icon!') : console.log('No Is Icon.')
    }

    return (

        <div className="container-fluid navdiv">

            <HomeIconSVG
                fill="currentColor"
                style={{ color: "#4bccff" }}
            />

            <button onClick={showMe} />


            { props.showHitListIcon ?
                <HitlistIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                /> : null}

            { props.showIngredientListIcon ?
                <IngredientListIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                /> : null}


            { props.showRecipeStepsIcon ?
                <RecipeStepsIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                /> : null}


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

