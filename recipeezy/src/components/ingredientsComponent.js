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
            <>
              <li key={toString(recipeIngredient.index + recipeIngredient.id)}>{recipeIngredient.originalString}</li><hr />
            </>
          );
        })}
      </ul>

    </div >
  );
}

export default IngredientsPage;