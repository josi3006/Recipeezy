// import './App.css';
import './components.css';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import SearchPage from './searchComponent.js';
import HitlistPage from './hitlistComponent.js';
import IngredientsPage from './ingredientsComponent.js';
import StepsPage from './stepsComponent';



function Navbar() {



    return (

        <div class="container">

            <Router>
                <nav>
                    <Link to="/"><i class="material-icons">HOME</i></Link>
                    <Link to="/ingredients">Ingredients</Link>
                </nav>


                <Route
                    path="/"
                    component={SearchPage}
                    exact
                />


                <Route
                    path="/ingredients"
                    component={IngredientsPage}
                />

            </Router>


        </div>


    );
}

export default Navbar;

