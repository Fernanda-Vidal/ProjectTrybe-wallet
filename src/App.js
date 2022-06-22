import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component="" />
        </Switch>
      </div>
    );
  }
}

export default App;
