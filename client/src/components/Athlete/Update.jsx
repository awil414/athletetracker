import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { UPDATE_ATHLETE } from "../../utils/mutations";
import "./athlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { GET_ATHLETE } from "../../utils/queries";

const UpdateAthlete = () => {

  // current data stored to be populated in this useState
  const [athleteFormData, setAthleteFormData] = useState("");

  const [updateAthlete, { error }] = useMutation(UPDATE_ATHLETE);
  const { athleteId } = useParams();
  const { loading, data } = useQuery(GET_ATHLETE, {
    variables: { athleteId: athleteId },
  });

  useEffect(() => {
    setAthleteFormData(data?.singleAthlete || {});
  }, [data?.singleAthlete]);
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(athleteFormData);
      const { data } = await updateAthlete({
        variables: {
          athleteId: athleteFormData._id,
          athlete: {
            firstName: athleteFormData.firstName,
            lastName: athleteFormData.lastName,
            email: athleteFormData.email,
            notes: athleteFormData.notes,
            injuryReport: athleteFormData.injuryReport,
          }
        },
      });
      console.log(data);
      window.location.replace('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAthleteFormData({ ...athleteFormData, [name]: value });
  };

  return (
    <Form className="newAthlete" onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={athleteFormData.firstName}
          required
          type="name"
          placeholder="Athlete First Name"
          name="firstName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={athleteFormData.lastName}
          type="name"
          placeholder="Athlete Last Name"
          name="lastName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={athleteFormData.email}
          type="email"
          placeholder="athlete@athlete.com"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={athleteFormData.notes}
          as="textarea"
          rows={3}
          name="notes"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Injury Report</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={athleteFormData.injuryReport}
          as="textarea"
          rows={1}
          name="injuryReport"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateAthlete;
