import React, {Component} from 'react';
import { 
    NavLink,
    Route,
    HashRouter
 } from 'react-router-dom';

import Home from "./Home";
// import Knowledge from "./Knowledge";
// import Location from "./Location";
// import Rank from "./Rank";
// import News from "./News";
// import login from "./login";
class Header extends Component {
        render(){      
        return(
            <HashRouter>
            <div>
              <div class = "topnav">
                <li><NavLink exact to="/Home">Home</NavLink>
                {/* <NavLink exact to="/Knowledge">ความรู้เบื้องต้น</NavLink>
                <NavLink exact to="/Location">สถานที่</NavLink>
                <NavLink exact to="/Rank">จักอันดับ</NavLink>
                <NavLink exact to="/News">ข่าวประชาสัมพันธ์</NavLink> */}
                <div class="topnav-right">
                  {/* <NavLink exact to="login">ลงชื่อเข้าใช้</NavLink> */}
                </div></li>
              </div>
              <div className="content">
                  <Route exact path="/Home" component={Home}/>
                  {/* <Route exact path="/Knowledge" component={Knowledge}/>
                  <Route exact path="/Location" component={Location}/>
                  <Route exact path="/Rank" component={Rank}/>
                  <Route exact path="/News" component={News}/>
                  <Route exact path="/login" component={login}/> */}
              </div>
            </div>
            </HashRouter>
        );
    }
}export default Header;