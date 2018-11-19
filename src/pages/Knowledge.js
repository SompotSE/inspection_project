import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,CardDeck } from 'reactstrap';
const CardEx = ({title,subtitle,path,text})=><div>
    <center>
    <Card style={{ backgroundColor: 'white'  }}>
        <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        </CardBody>
        <img width="60%" src={path} alt="pic1" />
        <CardBody>
        <CardText>{text}</CardText>
        <CardLink href="#">Read more--></CardLink>
        </CardBody>
    </Card> 
    </center>
    </div>
    


class Knowledge extends Component {
    render(){
        return(
            <div>
            <center>
            <table width="1000px" >
                <tr>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 1" 
                            subtitle = "การเช็คสภาพ"  
                            path = {require('../img/TRO.png')} 
                            text= "dd" 
                        />
                    </td>
                    <td width="20px"></td>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 2" 
                            subtitle = "เช็คศูนย์ล้อ"  
                            path = {require('../img/TRO.png')} 
                            text= "dbb" 
                        />
                    </td>
                    <td width="20px"></td>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 3" 
                            subtitle = "เช็คศูนย์ล้อ"  
                            path = {require('../img/TRO.png')} 
                            text= "dasdf" 
                        />
                    </td>
                </tr>
                <tr ><td colSpan="3">.</td></tr>
                <tr>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 4" 
                            subtitle = "การเช็คสภาพ"  
                            path = {require('../img/TRO.png')} 
                            text= "dd" 
                        />
                    </td>
                    <td width="20px"></td>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 5" 
                            subtitle = "เช็คศูนย์ล้อ"  
                            path = {require('../img/TRO.png')} 
                            text= "dbb" 
                        />
                    </td>
                    <td width="20px"></td>
                    <td>
                        <CardEx 
                            title="ขั้นตอนที่ 6" 
                            subtitle = "เช็คศูนย์ล้อ"  
                            path = {require('../img/TRO.png')} 
                            text= "dasdf" 
                        />
                    </td>
                </tr>
            </table>
            </center>
            </div>
            
        );
    }
}

export default Knowledge;