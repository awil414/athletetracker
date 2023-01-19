import React from "react";
import "./NewAthlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewAthlete() {
  return (
    <Form className="newAthlete">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="Athlete First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Athlete Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="athlete@athlete.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="(000)000-0000" />
      </Form.Group>
      {/* Think through images.... */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Injury Report</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewAthlete;
