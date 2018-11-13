import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Location extends Component {
    render() {      
        return (
            <div>
                <pe>Location </pe>
                <center>
                    <Map google={this.props.google}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoom={14}>
                    </Map>
                </center>
            </div>
        );
        }
    }

    export default GoogleApiWrapper({
        apiKey: ("AIzaSyDwUy4FtOC4ecPk8M7stYvqur-YPfrGFhA")
}) (Location)
