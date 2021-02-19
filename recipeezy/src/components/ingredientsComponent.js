// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';

function IngredientsPage(props) {
  return (

    <div>

<p>Here's the inhgredient coponent!</p>
      <ul>
        {Object.keys(props.recipeIngredients).map((key) => {
          const recipeIngredient = props.recipeIngredients[key];
          return (
            <div key={recipeIngredient.id}>
              <div>
                <div>
                  <li>{recipeIngredient.originalString}</li>

                </div>
              </div>
            </div>
          );
        })}
      </ul>

    </div>
  );
}

export default IngredientsPage;