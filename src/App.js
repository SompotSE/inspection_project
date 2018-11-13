import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'
import Footer from './Footer'
import icon from './img/icon.png';
import Profile from './img/Profile.png';

const Pic = ({sort}) => <img src={sort}/>
// const Pic = ({sort}) => import {sort} from './'{sort}';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a>
                <img src={Profile} width="40" height="80" />
              </a>
            </div>
            <div className="navbar-menu">
              <NavLink to="/Home" activeClassName="is-active" className="navbar-item">หน้าหลัก</NavLink>
              <NavLink to="/Knowledge" activeClassName="is-active" className="navbar-item">ความรู้เบื้องต้น</NavLink>
              <NavLink to="/Location" activeClassName="is-active" className="navbar-item">สถานที่</NavLink>
              <NavLink to="/Rank" activeClassName="is-active" className="navbar-item">จัดอันดับ</NavLink>
              <NavLink to="/News" activeClassName="is-active" className="navbar-item">ข่าวประชาสัมพันธ์</NavLink>
              <NavLink to="/login" activeClassName="is-active" className="navbar-item">ลงชื่อเข้าใช้</NavLink>
            </div>
          </div>
        </nav>



        <Routing />
        <img src={icon} width="100" height="50" />
        <Pic sort={icon} />
         <p /><center>
          <Footer />
        </center>


      </div>
    )
  }
}

export default App
