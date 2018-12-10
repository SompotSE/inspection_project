import React, { Component } from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Knowledge1 from './Knowledge1';
import Knowledge2 from './Knowledge2';
import Knowledge3 from './Knowledge3';
import Knowledge4 from './Knowledge4';
import Knowledge5 from './Knowledge5';

const CardEx = ({ title, subtitle, path, text, plink }) =>
    <div>
        <td >
            <div class="card" >
                <img class="card-img-top" src={path} alt={subtitle} />
                <div class="card-img-overlay bgtover">
                    <p class="card-title fwhite">{subtitle}</p>
                    <a data-toggle="modal" class="btn btn-primary" data-target={plink} >readmore</a>
                </div>
            </div>
        </td>
    </div>
class Knowledge extends React.Component {
    render() {
        return (
            <div>
                <br />
                <table width="90%"><td width="60%">
                    <center><img width="70%" src={require('../img/imgknowledge/title.png')} alt="title" /> <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wxzoZmK7v0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </center>
                </td><td>
                        <center>
                            <table border="0" >
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
                                    <td width="10px"></td></tr><tr>
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
                                    <td width="10px"></td></tr><tr>
                                    <CardEx
                                        title="ขั้นตอนที่ 5"
                                        subtitle="วิธีการตรวจวัดค่า CO HC และ การตรวจวัดค่าควันดำ"
                                        path={require('../img/imgknowledge/5.jpg')}
                                        text="dbb"
                                        plink={".No5"}
                                    />
                                    <td width="10px"></td>
                                    <td >
                                        <div class="card" >
                                            <img class="card-img-top" src={require('../img/imgknowledge/download.png')} alt="เอกสาร" />
                                            <div class="card-img-overlay bgtover">
                                                <p class="card-title fwhite">เอกสาร เพื่อช่วยให้เกิดความเข้าใจ</p>
                                                <a class="btn btn-primary" target="_blank" href="https://drive.google.com/file/d/16qp1S4ZcroycS9phElfC2a8vL1jKrPe_/view?usp=sharing" >download เอกสาร</a><br />
                                                <a target="_blank"  href="https://drive.google.com/file/d/1OAHuRgkN_nHSZtF8wF-xRm9rYVUHdtxU/view?usp=sharing" >Poster1</a><span> | </span>
                                                <a target="_blank"  href="https://drive.google.com/file/d/19OccWTbSTI4o5pvWf6NNebgs0T21mN62/view?usp=sharing" >Poster2</a><br />
                                                <a target="_blank"  href="https://lh5.googleusercontent.com/aJV1cQUqvvUKpSLH81WWL06SPkG0QNV3_2leBdezDX4_5-jRR87coOVyrXFEYFC8YpWg9aT36Fqkug=w1920-h938-rw" download>Poster3</a><span> | </span>
                                                <a target="_blank"  href="https://drive.google.com/file/d/15zH8TI7ddKv7JsFud3NG5uej05q8TxXw/view?usp=sharing" >Poster4</a><br />
                                                <a target="_blank"  href="https://drive.google.com/file/d/1DFTPmfxW7s5EWBCva3H0XwQiZPtPWAvl/view?usp=sharing" >Poster5</a><span> | </span>
                                                <a target="_blank"  href="https://drive.google.com/file/d/1jhNZqWSS8C08Cl6zdjRC6hC_QWyAvaWU/view?usp=sharing" >Poster6</a><br />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </td>
                </table>

                <Knowledge1 /> <Knowledge2 /><Knowledge3 /><Knowledge4 /><Knowledge5 />
            </div>
        );
    }
}

export default Knowledge;