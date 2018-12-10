import React, {Component} from 'react';

class Text extends Component {
    state = { rows: [] }
    
    componentDidMount() {
        this.getlocation();
    }

    getlocation = () =>{
        fetch('/Text')
        .then(res => res.json())
        .then(rows => this.setState({rows}))
       
    }
    render() {
        const {rows} = this.state;
        return (
        <div className="container"> 
            <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows.map(loca =>
                        <tr key={loca.id}>
                        <td>{loca.name} </td>
                        <td>{loca.address}</td>
                        <td>{loca.latitude}</td>
                        <td>{loca.longitude}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default Text