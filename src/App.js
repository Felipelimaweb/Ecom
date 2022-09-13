import logo from './logo.svg';
import './App.css';
import {Button } from 'react-bootstrap';
import Header from './Header'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Comercio Eletronico</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
