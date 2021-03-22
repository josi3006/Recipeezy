import './components.css';
import React, { useState } from 'react';
import { ReactComponent as HomeIconSVG } from '../images/home-black-48dp.svg';
import { ReactComponent as HitlistIconSVG } from '../images/youtube_searched_for-black-48dp.svg';
import { ReactComponent as IngredientListIconSVG } from '../images/shopping_cart-black-48dp.svg';
import { ReactComponent as RecipeStepsIconSVG } from '../images/format_list_numbered-black-48dp.svg';


function Navbar(props) {


       return (

        <div className="container-fluid navdiv">

            <HomeIconSVG
                fill="currentColor"
                style={{ color: "#4bccff" }}
                onClick={props.resetEverythingButton}
            />

            { props.showHitListIcon ?
                <HitlistIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                    onClick={props.reShowHitListButton}
                /> : null}

            { props.showIngredientListIcon ?
                <IngredientListIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                    onClick={props.showIngredientsButton}
                /> : null}

            { props.showRecipeStepsIcon ?
                <RecipeStepsIconSVG
                    fill="currentColor"
                    style={{ color: "#4bccff" }}
                    onClick={props.showRecipeStepsButton}
                /> : null}

        </div>


    );
}

export default Navbar;

