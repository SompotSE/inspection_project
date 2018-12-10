import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const Setlocation =() => <Marker name={'ตรอ.บางบอน3'} position={{ lat: 13.682210, lng: 100.383026 }} />
class Location extends Component {
    render() {
        return (
            <div>
                <center>
                    <Map google={this.props.google}
                        style={{ width: '80%', height: '80%', position: 'relative' }}
                        zoom={12}
                        initialCenter={{
                            lat: 13.8185021,
                            lng: 100.5141232
                        }}>
                        <Marker name={'ตรอ.บางบอน3'} position={{ lat: 13.682210, lng: 100.383026 }} />
                        <Marker name={'ตรอ ยูพีดี พหลโยธิน48'} position={{ lat: 13.944278, lng: 100.609535 }} />
                        <Marker name={'ตรอ. สยามแอดวานซ์ออโต้ ( Siam Advance Auto )'} position={{ lat: 13.918069, lng: 100.53799 }} />
                        <Marker name={'ตรอ.ราชพฤกษ์'} position={{ lat: 13.918069, lng: 100.452772 }} />
                        <Marker name={'ศูนย์คาสตรอล - ศูนย์สุขสวัสดิ์ พรีเมี่ยมเซอร์วิส'} position={{ lat: 13.921999, lng: 100.640481 }} />
                        <Marker name={'ตรอ.ธนานนท์'} position={{ lat: 13.920923, lng: 100.657203 }} />
                        <Marker name={'ตรอ. เอ็มเอ็นเค ออโต้ เซอร์วิส'} position={{ lat: 13.929019, lng: 100.379253 }} />
                        <Marker name={'ตรอ. ยูพีดี เพิ่มสิน'} position={{ lat: 13.900585, lng: 100.637793 }} />
                        <Marker name={'ตรอ.พีบีเอส กรุ๊ปเชอร์วิส'} position={{ lat: 13.884556, lng: 100.523022 }} />
                        <Marker name={'ศูนย์คาสตรอล - หจก.ณัฐพงศ์ออโต้ซัพพลาย'} position={{ lat: 13.880706, lng: 100.54182 }} />
                        <Marker name={'อู่บุญนาค ตรวจสภาพรถ'} position={{ lat: 13.858058, lng: 100.611058 }} />
                        <Marker name={'ตรอ.ดี.ดี.เจริญยนต์ เรวดี'} position={{ lat: 13.854486, lng: 100.512121 }} />
                        <Marker name={'ตรอ.ศูนย์บริการท่าน้ำนนท์'} position={{ lat: 13.842131, lng: 100.508286 }} />
                        <Marker name={'ตรอ.แอบโซลูตออโตเทค'} position={{ lat: 13.816079, lng: 100.591166 }} />
                        <Marker name={'ตรอ. จี แอนด์ เค'} position={{ lat: 13.782166, lng: 100.421503 }} />
                        <Marker name={'ตรอ.ซอย รามคำแหง 24'} position={{ lat: 13.750375, lng: 100.626813 }} />
                        <Marker name={'ตรอ. กลางกรุง พระราม3'} position={{ lat: 13.709285, lng: 100.546866 }} />
                        <Marker name={'ตรอ รักสิริ'} position={{ lat: 14.049196, lng: 100.633919 }} />
                        <Marker name={'ตรอ.ดีจัง'} position={{ lat: 14.048896, lng: 100.654915 }} />
                        <Marker name={'ตรอ.อัครวิทย์'} position={{ lat: 14.121965, lng: 100.53799 }} />
                        <Marker name={'ตรอ. แก้วอินทร์ เซอร์วิส'} position={{ lat: 13.870962, lng: 100.396881 }} />
                        <Marker name={'ตรอ. รัตนโกสินทร์'} position={{ lat: 13.796593, lng: 100.447664 }} />
                        <Marker name={'ตรอ. ดีเดย์เซอร์วิส'} position={{ lat: 13.671305, lng: 100.472029 }} />
                        <Marker name={'ตรอ พระราม 3 ศ.ชัยยนต์'} position={{ lat: 13.682513, lng: 100.523791 }} />
                        <Marker name={'สถานตรวจสภาพรถ ตรอ.บางพลีคลองขุด'} position={{ lat: 13.603483, lng: 100.701683 }} />
                        <Marker name={'ตรอ. ศรีเทพา เซอร์วิส'} position={{ lat: 13.632769, lng: 100.615395 }} />
                        <Marker name={'ตรอ.สันติการาจ (หจก.สถานตรวจสภาพรถยนต์สันติการาจ)'} position={{ lat: 13.722738, lng: 100.659482 }} />
                        <Marker name={'สถานตรวจสภาพรถเอกชน (ตรอ.) เบิร์ดเซอร์วิส'} position={{ lat: 13.766793, lng: 100.618759 }} />
                        <Marker name={'สถานตรวจสภาพรถ ตรอ. เศรษฐีทัวร์'} position={{ lat: 13.796634, lng: 100.555192 }} />
                        <Marker name={'ตรอ. คู้บอน'} position={{ lat: 13.845391, lng: 100.663626 }} />
                        <Marker name={'ตรอ. บริษัทพหลโยธินเดินรถและธุรกิจ จำกัด'} position={{ lat: 13.831378, lng: 100.720660 }} />
                        <Marker name={'ตรอ.บางใหญ่ธนากร'} position={{ lat: 13.850780, lng: 100.427243 }} />
                        <Marker name={'ตรอ เค วัน เซอร์วิส'} position={{ lat: 13.798573, lng: 100.392526 }} />
                        <Marker name={'ตรอ. วุฒิตรัย (สถานตรวจสภาพรถเอกชน)'} position={{ lat: 13.791329, lng: 100.365761 }} />
                        <Marker name={'ตรอ.ดับเบิ้ลเอ็น พุทธมณฑล'} position={{ lat: 13.806892, lng: 100.321386 }} />
                        <Marker name={'ตรอ.สิรภัณฑ์'} position={{ lat: 13.800480, lng: 100.198372 }} />
                        {/*<Setlocation /> */}
                    </Map>
                </center>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
<<<<<<< HEAD
})(Location)
    
=======
})(Location)
>>>>>>> 15e2bc06492eb7601755ca2fd172434d2e0f815c
