import React, { Component } from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
const CardEx = ({ title, subtitle, path, text, plink }) => <div>
    <td >
        <center>
            <Card style={{ backgroundColor: 'white' }}>
                <CardBody>
                    {/* <CardTitle>{title}</CardTitle> */}
                    <CardSubtitle>{subtitle}</CardSubtitle>
                </CardBody>
                <CardLink href={plink}>
                    <img width="100%" src={path} alt={title} />
                </CardLink>
            </Card>
        </center>
    </td>
</div>
class Knowledge extends React.Component {
    render() {
        return (
            <div>
                <center><img width="40%" src={require('../img/imgknowledge/title.png')} alt="title" /> </center>
                <center>
                    <table width="90%" border="0" >
                        <tr>
                            <CardEx
                                title="ขั้นตอนที่ 1"
                                subtitle="การตรวจสอบความถูกต้องของตัวรถและเอกสารเบื้องต้น"
                                path={require('../img/imgknowledge/1.jpg')}
                                text="dd"
                                plink={"/Knowledge/1"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 2"
                                subtitle="การตรวจพินิจภายนอกตัวรถ และเรื่องอุปกรณ์ความปลอดภัย"
                                path={require('../img/imgknowledge/2.jpg')}
                                text="dbb"
                                plink={"/Knowledge/2"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 3"
                                subtitle="การทดสอบศูนย์ล้อหน้า & การทดสอบห้ามล้อ "
                                path={require('../img/imgknowledge/3.jpg')}
                                text="dasdf"
                                plink={"/Knowledge/3"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 4"
                                subtitle="การตรวจวัดโคมไฟหน้า & การตรวจวัดระดับเสียงจากท่อไอเสีย"
                                path={require('../img/imgknowledge/4.jpg')}
                                text="dd"
                                plink={"/Knowledge/4"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 5"
                                subtitle="วิธีการตรวจวัดค่า CO HC & การตรวจวัดค่าควันดำ"
                                path={require('../img/imgknowledge/5.jpg')}
                                text="dbb"
                                plink={"/Knowledge/5"}
                            />
                            {/* <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 6"
                                subtitle="การตรวจวัดระดับเสียงจากท่อไอเสีย"
                                path={require('../img/imgknowledge/6.jpg')}
                                text="dasdf"
                            /> */}
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}

export default Knowledge;