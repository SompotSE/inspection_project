import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Knowledge from "../pages/Knowledge";
import Location from "../pages/Location";
import Rank from "../pages/Rank";
import News from "../pages/News";
import login from "../pages/login";
import Register from "../pages/Register";

export default () => (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Knowledge" component={Knowledge} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Rank" component={Rank} />
      <Route exact path="/News" component={News} />
      <Route exact path="/login" component={login} />
      <Route exact path="/Register" component={Register} />
    </Switch>
  )