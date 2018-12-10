import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Knowledge from "../pages/Knowledge";
import Location from "../pages/Location";
import Rank from "../pages/Rank";
import News from "../pages/News";
import login from "../pages/login";
import Register from "../pages/Register";
<<<<<<< HEAD
import ModalExample from "../pages/TestPopup";
import Text from "../pages/Text"
=======
import ModalExample2 from "../pages/TestPopup";
import ModalExample from "../pages/ModalExample";
>>>>>>> 15e2bc06492eb7601755ca2fd172434d2e0f815c
import 'bootstrap/dist/css/bootstrap.min.css';
import News1 from "../pages/News1";
import News2 from "../pages/News2";
import News3 from "../pages/News3";
import News4 from "../pages/News4";

export default () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Knowledge" component={Knowledge} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Rank" component={Rank} />
      <Route exact path="/News" component={News} />
      <Route exact path="/login" component={login} />
      <Route exact path="/test" component={ModalExample} />
      <Route exact path="/Register" component={Register} />
<<<<<<< HEAD
      <Route exact path="/Text" component={Text} />
=======
      <Route exact path="/TestPopup" component={ModalExample2} />
      <Route exact path="/News1" component={News1} />
      <Route exact path="/News2" component={News2} />
      <Route exact path="/News3" component={News3} />
      <Route exact path="/News4" component={News4} />

>>>>>>> 15e2bc06492eb7601755ca2fd172434d2e0f815c
    </Switch>
  )