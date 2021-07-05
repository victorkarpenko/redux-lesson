import React from "react";
import s from "./ContactsForm.module.css";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/loginUser";
import addUserActions from "../../redux/actions/userAction";
import { useState } from "react";

const ContactsForm = (props) => {
  const { loginUser, addUser } = props;

  const [credentials, setCredentials] = useState({
    pass: '',
    email: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(credentials);
    addUser(credentials);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="tel"
            name="pass"
            placeholder="pass"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className={s.btn}>
          Submit
        </Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  loginUser,
  addUser: addUserActions.addUser,
};

export default connect(null, mapDispatchToProps)(ContactsForm);
