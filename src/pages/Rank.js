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
                <center><br />
                    <h3>ประเมินสถานตรวจสภาพรถเอกชน</h3>
                    <h5>ประจำเดือนธันวาคม 2561</h5>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjXFYmYzNSD_ZhexiQMrW39z-Teit_j1ZfucWFbRuY2CIWFg/viewform?embedded=true" width="640" height="2289" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด...</iframe>
                </center>
            </div>
        );
    }
}

export default Rank;