import React, { Component } from 'react';
var state = 0;
class Rank extends Component {
    constructor() {
        super();
        this.state = {
            megsage: "like",
            count: 0
         
        };
        this.changVote = this.changVote.bind(this);
    }
    changVote() {
        if (state == 0) {
            this.setState({ count: this.state.count + 1 });
            this.setState({ megsage: "Unlike" });
            state = 1;
        }
        else if (state == 1) {
            this.setState({ count: this.state.count - 1 });
            this.setState({ megsage: "like" });
            state = 0;
        }
    }
    

    render() {
        return (
            <div>
                <center>
                    <p></p>
                    <marquee behavior="alternate" width="50%"><pe className="headtable">อันดับ ตรอ ประจำเดือนธันวาคม 2561</pe></marquee>

                    <br></br><br></br>
                    <table border="1" style={{ backgroundColor: 'white' }} bordercolor="gray">
                        <tr ><td width="300" className="titletable">ชื่อ ตรอ</td>
                            <td width="200" className="titletable">คะแนน</td>
                            <td width="200" className="titletable">ให้คะแนน</td>
                        </tr>
                        <tr><td width="300" ><center>ตรอ ลอร่าวัน</center></td>
                            <td width="200" ><center><h5>{this.state.count}</h5></center></td>
                            <td><center><button onClick={this.changVote}>{this.state.megsage}</button></center></td>
                        </tr>
                        
                    </table>

                </center>
            </div>
        );
    }
}

export default Rank;
