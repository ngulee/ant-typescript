import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ContextPage from './components/ContextPage';
import ComponentPage from './components/ComponentPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/context" component={ContextPage} />
          <Route exact path="/component_page" component={ComponentPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
