import React, { Component } from 'react';

class Rank extends Component {


    render() {
        return (
            <div>
                <center>
                    <p></p>
                    <pe><h2>อันดับ ตรอ ประจำเดือนธันวาคม 2561</h2></pe>

                    <br></br>
                    <table border="1" style={{ backgroundColor: 'white' }} bordercolor="gray">
                        <tr ><td width="300" ><center>ชื่อ ตรอ</center></td>
                            <td width="200" ><center>คะแนน</center></td>
                        </tr>
                        <tr><td width="300" ><center>ตรอ ลอร่าวัน</center></td>
                            <td width="200" ><center>******</center></td>
                        </tr>



                    </table>
                </center>
            </div>
        );
    }
}

export default Rank;
