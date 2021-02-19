// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';


const StepsPage = ({ recipeSteps }) => {

  return (
    <div>


      <Navbar />
     

  {/* This maps recipe STEPS list to page */}
  <ul>
                {Object.keys(recipeSteps).map((key) => {
                    const recipeStep = recipeSteps[key];
                    return (
                        <div key={recipeStep.number}>
                            <div>
                                <div>


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