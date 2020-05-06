import React from 'react';
import {Link} from "react-router-dom";
import Header from './Header.js';
import Hiperveza from './Components/Hiperveza.js';
import Naslovna from './Components/Naslovna.js';
import Povijest from './Components/Povijest.js';
import {
  Route,
  BrowserRouter as Router
}from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Route exact path="/" component={Naslovna}></Route>
        <Route path="/Povijest" component={Povijest}></Route>
        <Route path="/Hiperveza" component={Hiperveza}></Route>
      </Router>
    </div>
  );
}

export default App;
