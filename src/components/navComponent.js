import './components.css';
import React from 'react';
import { ReactComponent as HomeIconSVG } from '../images/home-black-48dp.svg';
import { ReactComponent as HitlistIconSVG } from '../images/youtube_searched_for-black-48dp.svg';
import { ReactComponent as IngredientListIconSVG } from '../images/shopping_cart-black-48dp.svg';
import { ReactComponent as RecipeStepsIconSVG } from '../images/format_list_numbered-black-48dp.svg';


function Navbar(props) {

    const style = {
        color: '#4bccff',
        fontSize: '1.6em',
        cursor: 'pointer'
    }

    return (

        <div className="container-fluid navdiv">

            <HomeIconSVG
                fill="currentColor"
                style={style}
                onClick={props.resetEverythingButton}
            />

            { props.showHitListIcon ?
                <HitlistIconSVG
                    fill="currentColor"
                    style={style}
                    onClick={props.reShowHitListButton}
                /> : null}

            { props.showIngredientListIcon ?
                <IngredientListIconSVG
                    fill="currentColor"
                    style={style}
                    onClick={props.showIngredientsButton}
                /> : null}

            { props.showRecipeStepsIcon ?
                <RecipeStepsIconSVG
                    fill="currentColor"
                    style={style}
                    onClick={props.showRecipeStepsButton}
                /> : null}

        </div>


    );
}

export default Navbar;

