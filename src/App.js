import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import backgroundImage from './background.png';
import PokemonList from './components/pokemon/PokemonList';
function App() {
  return (
    <Router>
    <div className="App" style={{ background: `url(${backgroundImage})`}}>
      <HomePage />
    </div>
    </Router>
  );
}

export default App;
