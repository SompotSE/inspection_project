import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,CardDeck } from 'reactstrap';
const CardEx = ({title,subtitle,path,text})=><div>
    <td width="300px">
    <center>        
        <Card style={{ backgroundColor: 'white'  }}>
            <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            </CardBody>
            <img width="95%" src={path} alt="pic1" />
            <CardBody>
            <CardText>{text}</CardText>
            <CardLink href="#">Read more--></CardLink>
            </CardBody>
        </Card> 
    </center>
    </td>
    </div>
class Knowledge extends Component {
    render(){
        return(
            <div>
            <center>
            <table width="1000px" >
                <tr>
                        <CardEx 
                            title="ขั้นตอนที่ 1" 
                            subtitle = "วิธีการทอสอบศูนย์ล้อหน้า"  
                            path = {require('../img/kl/1.jpg')} 
                            text= "dd"
                        />
                    <td width="10px"></td>           
                        <CardEx 
                            title="ขั้นตอนที่ 2" 
                            subtitle = "วิธีการตรวจวัดโคมไฟหน้า"  
                            path = {require('../img/kl/2.jpg')} 
                            text= "dbb" 
                        />                    
                    <td width="10px"></td>                    
                        <CardEx 
                            title="ขั้นตอนที่ 3" 
                            subtitle = "วิธีการตรวจวัดค่าควันดำ"  
                            path = {require('../img/kl/3.jpg')} 
                            text= "dasdf" 
                        />                    
                </tr>
                <tr ><td colSpan="3">.</td></tr>
                <tr>                    
                        <CardEx 
                            title="ขั้นตอนที่ 4" 
                            subtitle = "วิธีการตรวจวัดระดับเสียง"  
                            path = {require('../img/kl/4.jpg')} 
                            text= "dd" 
                        />                    
                    <td width="10px"></td>                    
                        <CardEx 
                            title="ขั้นตอนที่ 5" 
                            subtitle = "วิธีการตรวจวัดค่าก๊าซคาร์บอนาอนนอกไซด์"  
                            path = {require('../img/kl/5.jpg')} 
                            text= "dbb" 
                        />                    
                    <td width="10px"></td>                    
                        <CardEx 
                            title="ขั้นตอนที่ 6" 
                            subtitle = "วงจรตรวจพินิจรถยนต์"  
                            path = {require('../img/kl/6.jpg')} 
                            text= "dasdf" 
                        />                    
                </tr>
            </table>
            </center>
            </div>
            
        );
    }
}

export default Knowledge;