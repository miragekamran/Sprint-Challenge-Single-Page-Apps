import React from "react";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main data-testid='app'>
      <Route path='/' component={Header} />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      {/* <Route path='/characters/list' component={CharacterCard} /> */}
    </main>
  );
}