import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class Register extends React.Component {
    render() {
        return (
            <div><center>
                <Container>
                    <br />
                    <Row action="/user_create">
                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                            <div className="cardSignUp">
                                <div className="containerSignUp w3-left-align">
                                    <br />
                                    <center>
                                        <h1>Register</h1>
                                    </center>
                                    <br />

                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" id="exampleEmail" name="create_first_name" placeholder="Please enter an email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" id="examplePassword" name="create_last_name" placeholder="Please enter an password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">Education Level</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Select Level Education</option>
                                                <option>High School</option>
                                                <option>Technical College</option>
                                                <option>Bachelor Degrees</option>
                                                <option>Master Degrees</option>
                                                <option>Doctor Degrees</option>
                                            </Input>
                                        </FormGroup>

                                        <FormGroup tag="fieldset">
                                            <legend>Gender</legend>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Men
            </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio2" />{' '}
                                                    Woman
            </Label>
                                            </FormGroup>

                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="exampleFile">Profile Picture</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                Photos you upload will be profile photos
                            </FormText>
                                        </FormGroup>
                                        <center>
                                            <Button>Submit</Button>
                                        </center>
                                    </Form>
                                    <br /><br /><br /><br /><br />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </center></div>
        );
    }
}