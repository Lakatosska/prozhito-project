import React from 'react';
import logo from './logo.svg';
import { LinkButton } from '../LinkButton/LinkButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>Prozhito</p>
      <LinkButton to={"/news"} arrow={true} colorText="black" color={false} disabled>{ "Ссылка на новости"}</LinkButton>
    </div>
  );
}

export default App;
