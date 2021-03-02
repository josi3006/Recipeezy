// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";


function IngredientsPage(props) {


  return (

    <div className="contentdiv">

      <ul>
        {Object.keys(props.recipeIngredients).map((key) => {
          const recipeIngredient = props.recipeIngredients[key];
          return (
            <div key={toString(recipeIngredient.index + recipeIngredient.id)}>

              <li>{recipeIngredient.originalString}</li><hr />
            
            </div>
          );
        })}
      </ul>

    </div >
  );
}

export default IngredientsPage;