import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
                        <Marker name={'ตรอ.บางบอน3'} position={{ lat: this.props.lat1, lng: this.props.lon1 }} />
                    </Map>
                </center>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(Location)
