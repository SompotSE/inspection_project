import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'
import Footer from './Footer'
import Profile from './img/Profile.png';
import TRO from './img/TRO.png';
import { CardImg } from 'reactstrap';
const Pic = ({sort}) => <img src={sort}/>
// const Pic = ({sort}) => import {sort} from './'{sort}';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
                <img src={TRO} width="40" height="40"/>
            </div>
            <div className="navbar-menu">
              <NavLink to="/Home" activeClassName="is-active" className="navbar-item">หน้าหลัก</NavLink>
              <NavLink to="/Knowledge" activeClassName="is-active" className="navbar-item">ความรู้เบื้องต้น</NavLink>
              <NavLink to="/Location" activeClassName="is-active" className="navbar-item">สถานที่</NavLink>
              <NavLink to="/Rank" activeClassName="is-active" className="navbar-item">จัดอันดับ</NavLink>
              <NavLink to="/News" activeClassName="is-active" className="navbar-item">ข่าวประชาสัมพันธ์</NavLink>            </div>
            <div className="navbar-end">
              {/* <img src={Profile} width="40" height="40" /> */}
              <CardImg  src={require('./img/Profile.png')}  />
              <img src={'./img/Profile.png'} />
              <NavLink to="/login" activeClassName="is-active" className="navbar-item" data-target="#myModal" >ลงชื่อเข้าใช้</NavLink>
              
            </div>
          </div>
        </nav>

        <Routing />
          {/* <CardImg  src={require('./img/TRO.png')}  />         */}
        <Footer />

      </div>
    )
  }
}

export default App
