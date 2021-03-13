// import logo from './logo.svg';
// import './App.css';


const StepsPage = (props) => {

    return (

        <div className="contentdiv">

            {/* This maps recipe STEPS list to page */}

            {
                props.showRecipeStepsIcon === true ?


                    <ul>
                        {Object.keys(props.recipeSteps).map((key) => {
                            const recipeStep = props.recipeSteps[key];
                            return (
                                <div key={recipeStep.number}>
                                    <div>
                                        <div>
                                            <li>{recipeStep.step}</li><hr />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ul> :
                    <div>Loading...</div>
            }

        </div>
    );
};



export default StepsPage;