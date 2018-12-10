import React, { Component } from 'react'
import { Route, Switch,NavLink } from 'react-router-dom'
import Routing from './routes'
import Footer from './Footer'
import TRO from './img/TRO.png'

class App extends Component {
  render() {
    return (
      <div>
        <header class="header1">
          <div class="container-menu-header">
            <div class="topbar">
              <div class="topbar-social">
                <a href="https://www.facebook.com/PR.DLT.NEWS/" class="topbar-social-item fa fa-facebook"></a>
                <a href="https://www.instagram.com/explore/tags/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%81/top/" class="topbar-social-item fa fa-instagram"></a>
                <a href="https://www.youtube.com/watch?v=wxzoZmK7v0U" class="topbar-social-item fa fa-youtube-play"></a>
              </div>
              <span class="topbar-child1">
                เป็นประเมินผล ตรอ. ที่มีมาตรฐานที่ดีที่สุด
				</span>

              <div class="topbar-child2">
                <span class="topbar-email">
                  kmutnb.ac.th
					</span>

              </div>
            </div>

            <div class="wrap_header">
              <img src={TRO} width="40" height="40" />

              <div class="wrap_menu">
                <nav class="menu">
                  <ul class="main_menu">
                    <li>
                      <NavLink to="/" activeClassName="is-active" className="navbar-item">หน้าหลัก</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Knowledge" activeClassName="is-active" className="navbar-item">ความรู้เบื้องต้น</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Location" activeClassName="is-active" className="navbar-item">สถานที่</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Rank" activeClassName="is-active" className="navbar-item">จัดอันดับ</NavLink>
                    </li>

                    <li>
                      <NavLink to="/News" activeClassName="is-active" className="navbar-item">ข่าวประชาสัมพันธ์</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Text" activeClassName="is-active" className="navbar-item">ทดสอบ</NavLink>
                    </li>

                    <li>

                    </li>
                  </ul>
                </nav>
              </div>

              <div class="header-icons">
                <div class="header-wrapicon1 dis-block">
                  <NavLink to="/login" activeClassName="is-active" className="navbar-item" ><img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON" /></NavLink>

                </div>
              </div>
            </div>
          </div>
          
        </header>
        <Routing />
        <br /><br />
        <Footer />
      </div>
      
    )
  }
}

export default App
