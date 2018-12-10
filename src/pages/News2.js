import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class News2 extends React.Component {

    render() {
        return (
            <div>
                <br></br>
                <center>
                    <table width="1000px" border="0" >
                        <tr>
                            <Card>
                                <CardImg top width="50%" src={require('../img/news2.jpg')} alt="News1" />
                                <CardBody>
                                    <CardTitle>คนกรุงนิยมชำระภาษีรถผ่าน สนง.ขนส่งมากสุด เฉพาะ ก.ค. จัดเก็บกว่า 652 ล.</CardTitle>
                                    <CardText>วันที่ 26 สิงหาคม 2559 นายณันทพงศ์ เชิดชู รองอธิบดีกรมการขนส่งทางบก เปิดเผยว่า จากการที่กรมการขนส่งทางบกได้อำนวยความสะดวกให้แก่ประชาชน เลือกชำระภาษีรถประจำปีผ่านช่องทางการให้บริการหลากหลายช่องทาง ผลปรากฏว่า เฉพาะเดือนกรกฎาคม 2559 สามารถจัดเก็บภาษีรถในเขตกรุงเทพมหานครได้ทั้งสิ้น 652,562,635.99 บาท เป็นการใช้บริการรับชำระภาษีรถยนต์ ณ สำนักงานขนส่งกรุงเทพมหานครพื้นที่ 1–5 ของกรมการขนส่งทางบกมากที่สุด จำนวน 410,656 ราย จัดเก็บภาษีรถได้ทั้งสิ้น 465,160,181.51 บาท รองลงมา เป็นการใช้บริการรับชำระภาษีรถผ่านช่องทาง "เลื่อนล้อ ต่อภาษี" (Drive Thru for Tax) ชำระภาษี โดยไม่ต้องลงจากรถ จำนวน 53,379 ราย จัดเก็บภาษีรถได้ทั้งสิ้น 94,644,940.47 บาท และการใช้บริการชำระภาษีรถ ที่ห้างสรรพสินค้าในวันเสาร์–อาทิตย์ ตามโครงการ "ช็อปให้พอ แล้วต่อภาษี" (Shop Thru for Tax) มีผู้ใช้บริการ จำนวน 43,472 ราย จัดเก็บภาษีรถได้ทั้งสิ้น 63,028,835.77 บาท และที่ศูนย์บริการร่วมคมนาคม เชิงสะพานสมเด็จพระเจ้าตากสินที่ให้บริการทุกวันจันทร์–ศุกร์ ตั้งแต่เวลา 08.30–15.00 น. สามารถจัดเก็บภาษีได้ทั้งสิ้น 10,578,678.75 บาท</CardText>
                                    <CardText>ขณะที่ การชำระภาษีรถผ่านเว็บไซต์ www.dlte-serv.in.th  สามารถจัดเก็บภาษีได้ทั้งสิ้น 9,779,894.52 บาท และการรับชำระภาษีรถผ่านเคาน์เตอร์เซอร์วิส จัดเก็บภาษีได้ทั้งสิ้น 7,473,183 บาท โดยเจ้าของรถสามารถชำระภาษีรถล่วงหน้าได้ไม่เกิน 90 วัน และต้องไม่ค้างชำระภาษีรถเกินกว่า 1 ปี สำหรับรถยนต์ที่มีอายุการใช้งานครบ 7 ปี หรือรถจักรยานยนต์ที่มีอายุการใช้งานครบ 5 ปี ต้องมีใบรับรองการตรวจสภาพรถ จากสถานตรวจสภาพรถเอกชน (ตรอ.) มาแสดงด้วย หากเป็นรถที่ติดตั้งแก็ส ต้องมีหนังสือรับรองการตรวจสอบ และทดสอบตามระยะเวลาที่กำหนด ตลอดจนต้องมีกรมธรรม์ประกันภัยตาม พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ คงเหลือระยะเวลาคุ้มครองไม่น้อยกว่า 3 เดือน</CardText>
                                    <CardText>นอกจากนี้ กรมการขนส่งทางบก ยังเพิ่มช่องทางการให้บริการเพื่ออำนวยความสะดวกให้แก่ประชาชนเข้าถึงข้อมูลด้านทะเบียนและภาษีรถ ผ่านแอพพลิเคชั่น DLT eForm ได้ทุกที่ทุกเวลา เพียงสแกน QR Code DLT eForm ที่ปรากฏบนสื่อประชาสัมพันธ์ของกรมการขนส่งทางบก หรือจากเว็บไซต์ www.dlt.go.th  หรือดาวน์โหลดแอพพลิเคชั่นได้ฟรีผ่าน App Store, Google Play และ Window Phone ซึ่งมีคู่มือด้านทะเบียนและภาษีรถ คำแนะนำการติดต่องาน สถานที่ ติดต่อ เบอร์โทรศัพท์ แผนที่ และเอกสารหลักฐานที่ต้องใช้ รวมถึงดาวน์โหลดแบบฟอร์มคำขอต่างๆ แบบออนไลน์ เพื่อกรอกข้อมูลแล้วนำมาแสดงต่อเจ้าหน้าที่ได้ ซึ่งช่วยเพิ่มความสะดวกรวดเร็ว ลดระยะเวลา และขั้นตอนในการติดต่อขอรับบริการให้น้อยลง</CardText>
                                    
                                    <CardText>
                                        <small className="text-muted">26 สิงหาคม 2559</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}

export default News2;
