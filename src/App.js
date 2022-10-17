import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import { setAuthToken } from './service/auth.header';

function App() {
  const token = window.localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route path="/home" component={LandingPage} />
              <Route path="/dashboard" component={LandingPage} />
              <Route path="/users" component={LandingPage} />
              <Route path="/statistics" component={LandingPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
