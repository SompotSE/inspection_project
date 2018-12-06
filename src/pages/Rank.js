import React, { Component } from 'react';
var state=0;
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
        if (state==0){
        this.setState({ count: this.state.count + 1 });
        this.setState({megsage : "Unlike"});
        state=1;
        }
        else if (state==1){
            this.setState({ count: this.state.count - 1 });
            this.setState({megsage : "like"});
            state=0;
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
                        </tr>
                        <tr><td width="300" >ตรอ ลอร่าวัน</td>
                            <td width="200" ><h5>{this.state.count}</h5></td>
                        </tr>
                    </table>
                    <button onClick={this.changVote}>{this.state.megsage }</button>
                </center>
            </div>
        );
    }
}

export default Rank;
