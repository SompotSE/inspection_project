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
                    {/* <Map google={this.props.google}
                        style={{ width: '80%', height: '80%', position: 'relative' }}
                        zoom={14}>
<<<<<<< HEAD
                    </Map> */}
=======
                        {/* <SetMar latSet="13.8185021" lntSet = "100.5141232" /> */}
                        <SetMar />
                    </Map>
>>>>>>> 9ee3ebb6d356af8bc7bf5088734db8db502697d3
                </center>
            </div>
        );
    }
}

<<<<<<< HEAD
// export default GoogleApiWrapper({
//      apiKey: ("AIzaSyDwUy4FtOC4ecPk8M7stYvqur-YPfrGFhA")
// }) (Location)
=======
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
}) (Location)
>>>>>>> 9ee3ebb6d356af8bc7bf5088734db8db502697d3
