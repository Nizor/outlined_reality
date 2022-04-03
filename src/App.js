import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar>
        <switch>
          <Route path='/' exact />
        </switch>
      </NavBar>
    </Router>
    </>  
  );
}

export default App;
