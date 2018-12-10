import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="bg6  p-b-20 ">
                    <center>
                        <table width="40%" boder="1">
                            <td>
                            </td>
                            <td>
                                <div class="t-center ">
                                    <div class="t-center s-text8 ">
                                        <hr />
                                        <table>
                                            <tr>
                                                <td>
                                                    <img width="50%" src={require('./img/logoK.png')} alt="title" />
                                                </td>
                                                <td>
                                                    <h8>ติดต่อฉัน : กลุ่มนักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีคอมพิวเตอร์</h8><br />
                                                    <h5>ภาควิชาคอมพิวเตอร์ศึกษา คณะครุศาสตร์อุตสหกรรม มจพ.</h5>
                                                </td>
                                            </tr>

                                        </table>

                                    </div>
                                </div>
                            </td>
                        </table>
                    </center>
                </footer>

            </div>
        );
    }
}
export default Footer;
