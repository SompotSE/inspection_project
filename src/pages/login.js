import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div>

                <div class="modal fade" id="LogIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">LOGIN</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body bgBoMo" >
                                <center>

                                    <center>
                                        <img src={require('../img/hulogin.png')} width="50%" alt="Piclogin" />
                                    </center>
                                    <div className="w3-left-align">
                                        Username : <input type="text" class="form-control" id="user" name="username" />

                                        Password <input type="password" class="form-control" id="user" name="password" />
                                    </div>
                                    <center>
                                        <br />
                                        <button type="button" class="btn btn-success">Login</button>
                                        <span> or </span>
                                        <a href="/Register"> Sign Up!!</a>
                                    </center>

                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;