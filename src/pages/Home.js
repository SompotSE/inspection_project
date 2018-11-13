import React, {Component} from 'react';
import icon from '../img/icon.png';

class Home extends Component {
  render() {
    return (
      <div>
        <pe>กรมการขนส่ง</pe>
        <center>
        <img src={icon} width="900" height="400"/>
        </center>
      </div>
    );
  }
}

export default Home;
