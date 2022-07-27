import React from 'react';
import logo from './logo.svg';
import { LinkButtonRound } from '../LinkButtonRound/LinkButtonRound';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>Prozhito</p>
      <LinkButtonRound to={"/news"} color={true} direction="right"  size='medium' border disabled/>
    </div>
  );
}

export default App;
