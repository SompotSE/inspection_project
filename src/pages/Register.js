import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Register extends React.Component {
    render() {
        return (
            <Container>
                
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}><Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Please enter an email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Please enter an password" />
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

                        <FormGroup>
                            <Label for="exampleFile">Profile Picture</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                Photos you upload will be profile photos
                            </FormText>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>Gender</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}<p>Men</p>
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
                        <Button>Submit</Button>
                    </Form></Col>
                </Row>
            </Container>
        );
    }
}