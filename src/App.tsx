import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Front from './front/Front';

const App: React.FC<{}> = () => {
  return (
    <div className="App" data-testid="app">
      <Switch>
        <Route exact path='/' component={Front} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div >
  );
}

export default hot(module)(App);
