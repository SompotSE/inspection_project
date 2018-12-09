import React, {Component} from 'react';
import { Card, CardBody, Button,CardDeck, CardTitle, CardText, CardImg } from 'reactstrap';

class News extends Component {


    render(){
        return(
    
                <CardDeck>
      <Card>
        <CardImg top width="500%" src={require('../img/news1.jpg')  } alt="Card image cap" />
        <CardBody>
          <h3> ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ.</h3>
          <CardText>กรมการขนส่งทางบก คุมเข้ม!!! ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ. ด้วยระบบเทคโนโลยีสารสนเทศทันสมัย เชื่อมโยงผลการตรวจสภาพรถออนไลน์ทั่วประเทศ สามารถต่อภาษีรถได้โดยไม่ต้องใช้ใบรับรองการตรวจสภาพรถ คาด!!! ระบบออนไลน์จะเสร็จสมบูรณ์พร้อมให้บริการภายในเดือนกรกฎาคม 2559
          </CardText>
          <Button>Read more</Button>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={require('../img/news2.jpg')} alt="Card image cap" />
        <CardBody>
          <h3>คนกรุงนิยมชำระภาษีรถผ่าน สนง.ขนส่งมากสุด เฉพาะ ก.ค. จัดเก็บกว่า 652 ล.</h3>
          <CardText>ขนส่งทางบก เผย ปชช.นิยมชำระภาษีรถ ผ่านสำนักงานกรมการขนส่งทางบกมากที่สุด เฉพาะ ก.ค. เดือนเดียว จัดเก็บภาษีรถในเขต กทม. ได้ 652,562,635.99 ล้าน ขณะที่ การใช้บริการชำระภาษีรถผ่านเว็บไซต์ยังนิยมต่อเนื่อง ...

</CardText>
<Button>Read more</Button>
          <CardText>
            <small className="text-muted">Last updated 15 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    
      <Card>
         <CardImg top width="100%" src={require('../img/news3.jpg')} alt="Card image cap" />
        <CardBody>
          <h3>ขนส่งทางบก คุมเข้มสถานที่ตรวจ ตรอ.ใช้ระบบไอทีป้องกันการปลอมเอกสาร</h3>
          <CardText>ขนส่งทางบกเตรียมใช้ระบบเทคโนโลยีเชื่อมโยงผลตรวจสภาพรถออนไลน์ทั่วประเทศ ต่อภาษีรถได้โดยไม่ต้องใช้ใบรับรองการตรวจสภาพรถ คาดพร้อมให้บริการภายใน ก.ค.59 นี้ ป้องกันการปลอมแปลงเอกสารการตรวจสภาพรถจาก ตรอ.

</CardText>
<Button>Read more</Button>
          <CardText>
            <small className="text-muted">Last updated 30 mins ago</small>
          </CardText>
        </CardBody>
        </Card>
    </CardDeck>
            

  
        );
    }
}

export default News;
