import React, { Component } from 'react';


class Knowledge1 extends Component {
  render() {
    return (
      <div>
        <center>
        <table width="670px" border="0" className="tableK">
          <tr><td width="10%"></td><td>
            <h1>วิธีการตรวจวัดค่า CO HC </h1>
            <img width="100%" src={require('../img/imgknowledge/6-1.png')} alt="ป้าย" /><br />
            <img width="100%" src={require('../img/imgknowledge/5-11.png')} alt="ป้าย" /><br />
            <img width="100%" src={require('../img/imgknowledge/6-2.png')} alt="ป้าย" /><br />
            <h3>เครื่องวิเคราะห์ก๊าซต้องมีคุณลักษณะ ดังนี้</h3>
            <p>1) วัดปริมาณก๊าซคาร์บอนมอนอกไซด์ได้ไม่น้อยกว่าร้อยละ 4.5 โดยปริมาตรแสดงผลได้ตั้งแต่ร้อยละ 0 ถึงร้อยละ 10 โดยปริมาตร หรือมากกว่า</p>
            <p>2) วัดปริมาตรค่าก๊าซไฮโดรคาร์บอนได้ไม่น้อยกว่า 10,000 ส่วนในล้านส่วน (ppm) แสดงผลได้ตั้งแต่ 0 ถึง 10,000 ส่วนในล้านส่วน (ppm) หรือมากกว่า</p>
          
          <h1> การตรวจวัดค่าควันดำ</h1>
          <img width="100%" src={require('../img/imgknowledge/7.png')} alt="ป้าย" /><br />
          <p><b>“ความเร็วรอบสูงสุด”</b> หมายความว่า ความเร็วของเครื่องยนต์ขณะเร่งเครื่องยนต์สูงสุด โดยไม่มีภาระและระบบถ่ายกำลังของเครื่องยนต์ไปยังล้อรถยนต์ อยู่ในสภาพไม่ทำงาน (เกียร์ว่าง)
เครื่องมือวัดระบบ “กระดาษกรอง” (fiFilter)
</p>
          <img width="100%" src={require('../img/imgknowledge/7-2.png')} alt="ป้าย" /><br />
          <img width="100%" src={require('../img/imgknowledge/7-3.png')} alt="ป้าย" /><br />
          <img width="100%" src={require('../img/imgknowledge/7-4.png')} alt="ป้าย" /><br />
          <img width="100%" src={require('../img/imgknowledge/7-5.png')} alt="ป้าย" /><br />
          </td><td width="10%"></td>
          </tr>
        </table>
        </center>
      </div>
    );
  }
}

export default Knowledge1;