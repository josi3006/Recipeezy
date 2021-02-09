// import logo from './logo.svg';
// import './App.css';
import Navbar from './navComponent';


function StepsPage(props) {
  return (
    <div>
      <Navbar />

      
      
      <h1>{ props.message }</h1>
    </div>
  );
}

export default StepsPage;