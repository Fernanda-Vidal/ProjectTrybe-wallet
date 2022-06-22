import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
