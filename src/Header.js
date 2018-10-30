import React, {Component} from 'react';

import {HashRouter,
    Route,
    Link
} 
from 'react-router-dom'

import Home from "./Home"
import Knowledge from "./Knowledge";
import Location from "./Location"
import Rank from "./Rank";
import News from "./News";
import login from "./login";

// const MLink =({text,to}) => <class="topnav">
// <a class="nav-link active" href={to}>{text}</a>

class Header extends Component {
        render(){      
        return(
            <HashRouter>
                <div class = "topnav">
                <li><NavLinK to="/Home">Home</NavLinK></li>
                <li><NavLinK to="/Knowledge">ความรู้เบื้องต้น</NavLinK></li>
                <li><NavLinK to="/Location">สถานที่</NavLinK></li>
                <li><NavLinK to="/Rank">จัดอันดับ</NavLinK></li>
                <li><NavLinK to="/News">ข่าวประชาสัมพันธ์</NavLinK></li>
                <li><NavLinK to="/Knowledge">Knowledge</NavLinK></li>
                <div class="topnav-right">
                    <li><NavLinK to="/login">ลงชื่อเข้าใช้</NavLinK></li>
                </div>
                </div>
            </HashRouter>


        );
    }
}export default Header;