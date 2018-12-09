import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Knowledge from "../pages/Knowledge";
import Location from "../pages/Location";
import Rank from "../pages/Rank";
import News from "../pages/News";
import login from "../pages/login";
import Register from "../pages/Register";
import ModalExample2 from "../pages/TestPopup";
import ModalExample from "../pages/ModalExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import Knowledge1 from "../pages/Knowledge1";
import Knowledge2 from "../pages/Knowledge2";
import Knowledge3 from "../pages/Knowledge3";
import Knowledge4 from "../pages/Knowledge4";
import Knowledge5 from "../pages/Knowledge5";

export default () => (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Knowledge" component={Knowledge} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Rank" component={Rank} />
      <Route exact path="/News" component={News} />
      <Route exact path="/login" component={login} />
      <Route exact path="/test" component={ModalExample} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/TestPopup" component={ModalExample2} />
      <Route exact path="/Knowledge/1" component={Knowledge1} />
      <Route exact path="/Knowledge/2" component={Knowledge2} />
      <Route exact path="/Knowledge/3" component={Knowledge3} />
      <Route exact path="/Knowledge/4" component={Knowledge4} />
      <Route exact path="/Knowledge/5" component={Knowledge5} />

    </Switch>
  )