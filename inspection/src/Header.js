import React, {Component} from 'react';

// const MLink =({text,to}) => <class="topnav">
// <a class="nav-link active" href={to}>{text}</a>

class Header extends Component {
        render(){      
        return(
                <div class = "topnav">
                <a class="active" href="#home">Home</a>
                <a href="/Knowledge">ความรู้เบื้องต้น</a>
                <a href="/Location">สถานที่</a>
                <a href="/Rank">จัดอันดับ</a>
                <a href="/News">ข่าวประชาสัมพันธ์</a>
                <div class="topnav-right">
                    <a href="/login">ลงชื่อเข้าใช้</a>
                </div>
                </div>
        );
    }
}export default Header;