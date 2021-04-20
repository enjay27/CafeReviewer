import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch} from 'react-router-dom';
import 'App.css';
import 'css/common.scss';
import MainView from 'views/main/MainView.js';
import LoginView from 'views/login/LoginView.js';
import SingupView from 'views/signup/SignupView';
import NotFound from 'components/Error/NotFound';
import FindPw from "components/FindPw/FindPw";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={MainView} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SingupView} />
        <Route path="/findpw" component={FindPw} />
        <Route path={['*', '/error']} component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
