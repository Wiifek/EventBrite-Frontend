
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import authService from "../../services/auth.service";

import { Routes } from "../../routes";
import toastrService from "../../services/toastr.service";


export default () => {
  const { token } = useParams();
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [passwordRequired, setPasswordRequired] = useState(null);
  const [passwordConfirmationRequired, setPasswordConfirmationRequired] = useState(null);

  const isValidForm =()=>{
    if (!password){
      setPasswordRequired('Password is required.')
    }
    else{
      setPasswordRequired(null)
    }
    if (!passwordConfirmation){
      setPasswordConfirmationRequired('Password confirmation is required.')
    }
    else if (password !== passwordConfirmation){
      setPasswordConfirmationRequired("Passwords does not match!")
    }
    else{
      setPasswordConfirmationRequired(null)
    }
    if(password && passwordConfirmation && password === passwordConfirmation){
      return true
    }
    else return false
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(isValidForm()){
    authService.resetPassword({password}, token)
    .then(response => {
      toastrService.showSuccessMessage("Password reset successfully ", `Reset password`)
      
    }).catch(err => {
      toastrService.showErrorMessage("Password reset error!!", `Reset password`)
      console.log(err)
    });
  }
  }
  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Reset password</h3>
                <Form onSubmit={submitHandler}>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control  value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                      <div className="text-start w-100 d-block invalid-feedback">{passwordRequired}</div>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control  value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} type="password" placeholder="Confirm Password" />
                      <div className="text-start w-100 d-block invalid-feedback">{passwordConfirmationRequired}</div>
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Reset password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
