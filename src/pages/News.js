import React from 'react';
import { Card,CardLink, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const CardNews = ({ images, title, subtitle, btn, date,linkk }) => <div>
  <td width="800px">
    <Card>

      <CardImg top width="50px" src={images} alt="Card image" />
      <CardBody>
        <CardTitle><h3>{title}</h3></CardTitle>
        <CardText>{subtitle}</CardText>
        <CardLink href={linkk}>
          <Button color="primary" >{btn}</Button><br></br>
        </CardLink>
        <small className="text-muted">{date}</small>
      </CardBody>
    </Card>

  </td>
</div>

class News extends React.Component {

  render() {
    return (
      <div>
        <center>
          <table width="1500px" border="0" >
            <tr ><td colSpan="2">. </td></tr>
            <tr>
              <CardNews
                images={require('../img/news4.jpg')}
                title="ขนส่งฯ เข้มงวดตรวจการดำเนินการของสถานตรวจสภาพรถทั่วประเทศ"
                subtitle="ขนส่งฯ เข้มงวดตรวจการดำเนินการของสถานตรวจสภาพรถ (ตรอ.) ทั่วประเทศ สามารถตรวจสอบผลการตรวจสภาพรถผ่านเว็บไซต์ได้ทันที ..."
                btn="Read more..."
                linkk={"/News1"}
                date="22 สิงหาคม 2561"
              />
              <td width="10px"></td>
              <CardNews
                images={require('../img/news2.jpg')}
                title="คนกรุงนิยมชำระภาษีรถผ่าน สนง.ขนส่งมากที่สุด เฉพาะ ก.ค. จัดเก็บกว่า 652 ล."
                subtitle="ขนส่งทางบก เผย ปชช.นิยมชำระภาษีรถ ผ่านสำนักงานกรมการขนส่งทางบกมากที่สุด เฉพาะ ก.ค. เดือนเดียว จัดเก็บภาษีรถในเขต กทม. ได้ 652,562,635.99 ล้าน ขณะที่การใช้บริการ ..."
                btn="Read more..."
                linkk={"/News2"}
                date="26 สิงหาคม 2559"
              />
            </tr>
            <tr ><td colSpan="2">. </td></tr>
            <tr>
              <CardNews
                images={require('../img/news1.jpg')}
                title="ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ."
                subtitle="กรมการขนส่งทางบก คุมเข้ม!!! ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ. ด้วยระบบเทคโนโลยีสารสนเทศทันสมัย เชื่อมโยงผลการตรวจสภาพรถออนไลน์ทั่วประเทศ สามารถต่อภาษีรถได้โดยไม่ต้องใช้ใบรับรองการตรวจสภาพรถ คาด!!! ระบบออนไลน์จะเสร็จสมบูรณ์พร้อมให้บริการภายใน ..."
                btn="Read more..."
                linkk={"/News3"}
                date="20 มิถุนายน 2559"
              />
              <td ></td>
              <CardNews
                images={require('../img/news3.jpg')}
                title="คุมเข้มสถานที่ตรวจ ตรอ.ใช้ระบบไอทีป้องกันการปลอมเอกสาร"
                subtitle="ขนส่งทางบกเตรียมใช้ระบบเทคโนโลยีเชื่อมโยงผลตรวจสภาพรถออนไลน์ทั่วประเทศ ต่อภาษีรถได้โดยไม่ต้องใช้ใบรับรองการตรวจสภาพรถ คาดพร้อมให้บริการภายใน ก.ค.59 นี้ ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ. ..."
                btn="Read more..."
                linkk={"/News4"}
                date="16 มิถุนายน 2559"
              />
            </tr>
          </table>
        </center>
      </div>


    );
  }
}

export default News;
