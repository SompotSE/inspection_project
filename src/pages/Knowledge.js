import React, { Component } from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Knowledge1 from './Knowledge1';
import Knowledge2 from './Knowledge2';
import Knowledge3 from './Knowledge3';
import Knowledge4 from './Knowledge4';
import Knowledge5 from './Knowledge5';

const CardEx = ({ title, subtitle, path, text, plink }) => <div>
    <td >
        <center>
            <Card style={{ backgroundColor: 'white' }}>
                <CardBody>
                    {/* <CardTitle>{title}</CardTitle> */}
                    <CardSubtitle>{subtitle}</CardSubtitle>
                </CardBody>
                <NavLink to={plink}>
                    <img width="100%" src={path} alt={title} />
                </NavLink>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={plink}>คลิกเพื่ออ่าน</button>
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
                                plink={".No1"}

                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 2"
                                subtitle="การตรวจพินิจภายนอกตัวรถ และเรื่องอุปกรณ์ความปลอดภัย"
                                path={require('../img/imgknowledge/2.jpg')}
                                text="dbb"
                                plink={".No2"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 3"
                                subtitle="การทดสอบศูนย์ล้อหน้า และ การทดสอบการห้ามล้อ "
                                path={require('../img/imgknowledge/3.jpg')}
                                text="dasdf"
                                plink={".No3"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 4"
                                subtitle="การตรวจวัดโคมไฟหน้า และ การตรวจวัดระดับเสียงจากท่อไอเสีย"
                                path={require('../img/imgknowledge/4.jpg')}
                                text="dd"
                                plink={".No4"}
                            />
                            <td width="10px"></td>
                            <CardEx
                                title="ขั้นตอนที่ 5"
                                subtitle="วิธีการตรวจวัดค่า CO HC และ การตรวจวัดค่าควันดำ"
                                path={require('../img/imgknowledge/5.jpg')}
                                text="dbb"
                                plink={".No5"}
                            />
                        </tr>
                    </table>
                </center>
                
                            <Knowledge1 /> <Knowledge2 /><Knowledge3 /><Knowledge4 /><Knowledge5 />
            </div>
        );
    }
}

export default Knowledge;