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
            />

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

        </div>


    );
}

export default Navbar;

