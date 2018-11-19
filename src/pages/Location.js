import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

var lntSet 
var latSet 

function SetMar () {
   return <h1>Test</h1> 
}
    
class Location extends Component {

    
    render() {
        return (
            <div>
                <pe>Location </pe>
                <center>
                    <Map google={this.props.google}
                        style={{ width: '80%', height: '80%', position: 'relative' }}
                        zoom={14}>
                        {/* <SetMar latSet="13.8185021" lntSet = "100.5141232" /> */}
                        <SetMar />
                    </Map>
                </center>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
}) (Location)