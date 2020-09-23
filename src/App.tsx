import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AppProvider } from './components/ContextPage/context';

// import ContextPage from './components/ContextPage';
import ComponentPage from './components/ComponentPage';
import Products from './components/ContextPage/_components/Products';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/context" component={Products} />
            <Route exact path="/component_page" component={ComponentPage} />
          </Switch>
        </div>
    </BrowserRouter>
    </AppProvider>
    
  );
}

export default App;
