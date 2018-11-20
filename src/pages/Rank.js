import React, { Component } from 'react';

class Rank extends Component {


    render() {
        return (
            <div>
                <center>
                    <p></p>
                    <marquee behavior="alternate" width="50%"><pe className = "headtable">อันดับ ตรอ ประจำเดือนธันวาคม 2561</pe></marquee>

                    <br></br><br></br>
                    <table border="1" style={{ backgroundColor: 'white' }} bordercolor="gray">
                        <tr ><td width="300" className = "titletable">ชื่อ ตรอ</td>
                            <td width="200" className = "titletable">คะแนน</td>
                        </tr>
                        <tr><td width="300" >ตรอ ลอร่าวัน</td>
                            <td width="200" >******</td>
                        </tr>



                    </table>
                <h1>Test</h1>
                </center>
            </div>
        );
    }
}

export default Rank;
