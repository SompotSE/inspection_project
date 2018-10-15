import React, {Component} from 'react';



class Header extends Component {


    render(){
        
        return(
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">HOME</a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">ความรู้เบื้องต้น</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">สถานที่</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">จัดอันดับ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">ข่าวประชาสัมพันธ์</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">รูปโปรไฟล์</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">ชื่อโปรไฟล์</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" hraf="#">LOG OUT</a>
                        </li>
                    </ul>
                </div>  
            </nav>
        );
    }
}

export default Header;

    
