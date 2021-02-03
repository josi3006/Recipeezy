import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchPage from './components/searchComponent.js';
import IngredientsPage from './components/ingredientsComponent.js';
import StepsPage from './components/stepsComponent';



function App() {
  return (


    <div className="App">


<Router>           


                <Route
                    path="/"
                    component={SearchPage}
                    exact
                />


                <Route
                    path="/ingredients"
                    component={IngredientsPage}
                />

                <Route
                    path="/steps"
                    component={StepsPage}
                />

            </Router>


    </div>


  );
}

export default App;
