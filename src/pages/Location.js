import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const Setlocation =() => <Marker name={'ตรอ.บางบอน3'} position={{ lat: 13.682210, lng: 100.383026 }} />
class Location extends Component {
    render() {
        return (
            <div>
                <pe>Location </pe>
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
                        <Marker name={'ตรอ ยูพีดี พหลโยธิน48'} position={{ lat: 13.879551, lng: 100.609523 }} />
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
                        {/*<Setlocation /> */}
                    </Map>
                </center>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(Location)
