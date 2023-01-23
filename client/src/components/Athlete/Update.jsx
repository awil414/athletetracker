//We will use NewAthlete form.

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ATHLETE } from '../../utils/mutations';
import "./athlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {QUERY_ME, GET_ATHLETE } from '../../utils/queries';

// import Auth from '../../utils/auth';

const UpdateAthlete = () => {
  // ????We will want current data stored to be populated in this useState
  const [athleteFormData, setAthleteFormData] = useState('')

  const [updateAthlete, { error, athleteData }] = useMutation(UPDATE_ATHLETE );

  // ???? Do we need queries????


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
    const { athleteData } = await updateAthlete({
      variables: {
        ...athleteFormData,
      },
    });

      setAthleteFormData('');
    } catch (err) {
      console.error(err);
  }
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setAthleteFormData({ ...athleteFormData, [name]: value });
  }


  return (
    
    <Form className="newAthlete" onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.firstName}
            required type="name" placeholder="Athlete First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.lastName} type="name" placeholder="Athlete Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.email} type="email" placeholder="athlete@athlete.com" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.phoneNumber} type="number" placeholder="(000)000-0000" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.notes} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Injury Report</Form.Label>
        <Form.Control onChange={handleInputChange} value={athleteFormData.injuryReport} as="textarea" rows={1} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {/* ??? This button should link back to Dashboard */}
        Update
      </Button>
    </Form>
  );
};


export default UpdateAthlete;
