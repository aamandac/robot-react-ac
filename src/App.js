import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import * as Pages from './pages';

window.server = '/janusbase/janus'

function App() {

  return (
    <Router>  
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/view/1" />
          </Route>
          <Route path="/nav" component={Pages.Nav} />
          <Route path="/sim" component={Pages.Sim} />
          <Route path="/config" component={Pages.StreamConfig} />
          <Route path="/view/debug" render={() => <Pages.StreamView debug={true}/>} />
          <Route path="/view/:id" component={Pages.StreamView} />
          <Route path="/view" component={Pages.StreamViewIndex} />
        </Switch>
      </div>
    </Router> 
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App