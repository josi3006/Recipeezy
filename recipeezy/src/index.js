import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './components/searchComponent.js';
// import StepsPage from './components/stepsComponent.js';
import Navbar from './components/navComponent.js';
// import IngredientsPage from './components/ingredientsComponent.js';
// import HitlistPage from './components/hitlistComponent.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

<App />

    {/* <Navbar />
    <SearchPage /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
