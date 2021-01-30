// import './App.css';
import './components.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from 'react-router-dom';
import SearchPage from './searchComponent.js';



function Navbar() {



    return (

        <div class="container">

            <div class="navdiv">

                
                <Router>
                <nav>
                    <Link to="/"><i class="material-icons-outlined">home</i></Link>
                    {/* <Link to="/dashboard">Dashboard</Link> */}
                </nav>

             
                    <Route
                        path="/"
                        component={SearchPage}
                        exact
                    />
                    {/* <Route
                path="/dashboard"
                component={DashboardComponent}
            /> */}

                </Router>
            </div>

        </div>
    );
}

export default Navbar;

