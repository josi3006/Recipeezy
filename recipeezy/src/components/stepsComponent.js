// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';


const StepsPage = ({ recipeSteps }) => {

  return (
    <div>
      <Navbar />
      <ul>
        {Object.keys(recipeSteps).map((key) => {
          const recipeStep = recipeSteps[key];
          return (
            <div key={recipeStep.number}>
              <div>
                <div>

                  {/* Added ".step" below - see above where removed */}

                  <li>{recipeStep.step}</li>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};



export default StepsPage;