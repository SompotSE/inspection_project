import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Register from "./Register";

class login extends Component {
    render() {
        return (
            <div>
                <center>
                    <table width="70%">
                        <tr>
                            <td >
                                <center>
                                    <img src={require('../img/hulogin.png')} width="730px" height="130px" alt="Piclogin" />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Username : <input type="text" class="form-control" id="user" name="username" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password <input type="password" class="form-control" id="user" name="password" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <br />
                                    <NavLink to="/Register"><button type="button" class="btn btn">Sign Up</button></NavLink>

                                    <button type="button" class="btn btn-success">Summit</button>
                                </center>
                            </td>
                        </tr>

                    </table>
                </center>
            </div>
        );
    }
}

export default login;