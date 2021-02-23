// import logo from './logo.svg';
// import './App.css';


const StepsPage = (props) => {

    return (
        <div>



            {/* This maps recipe STEPS list to page */}

            <ul>
                {Object.keys(props.recipeSteps).map((key) => {
                    const recipeStep = props.recipeSteps[key];
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