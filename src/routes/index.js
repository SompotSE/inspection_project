import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Knowledge from "../pages/Knowledge";
import Location from "../pages/Location";
import Rank from "../pages/Rank";
import News from "../pages/News";
import login from "../pages/login";
<<<<<<< HEAD
import ModalExample from "../pages/ModalExample";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Register from "../pages/Register";
import ModalExample from "../pages/TestPopup";
import 'bootstrap/dist/css/bootstrap.min.css';


>>>>>>> 9b04ddc262dee02543be903a6cae9f836a39e30a

export default () => (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Knowledge" component={Knowledge} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Rank" component={Rank} />
      <Route exact path="/News" component={News} />
      <Route exact path="/login" component={login} />
<<<<<<< HEAD
      <Route exact path="/test" component={ModalExample} />
=======
      <Route exact path="/Register" component={Register} />
      <Route exact path="/TestPopup" component={ModalExample} />
>>>>>>> 9b04ddc262dee02543be903a6cae9f836a39e30a
    </Switch>
  )