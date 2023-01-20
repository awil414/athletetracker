import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ATHLETE} from '../../utils/mutations';
import "./NewAthlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {QUERY_ME, GET_ATHLETES } from '../../utils/queries';

import Auth from '../../utils/auth';

const AddAthlete = () => {
  const [athleteFormData, setAthleteFormData] = useState('')

  const [addAthlete, { error }] = useMutation(ADD_ATHLETE, {
    update(cache, { data: { addAthlete } }) {
      try {
        const { athletes } = cache.readQuery({ query: GET_ATHLETES });

        cache.writeQuery({
          query: GET_ATHLETES,
          data: { athletes: [addAthlete, ...athletes] },
        });
      } catch (e) {
        console.error(e);
      }
         // update me object's cache
         const { me } = cache.readQuery({ query: QUERY_ME });
         cache.writeQuery({
           query: QUERY_ME,
           data: { me: { ...me, athletes: [...me.athletes, addAthlete] } },
         });
       },
});

const handleFormSubmit = async (event) => {
  event.preventDefault();

  try {
    const { data } = await addAthlete({
      variables: {
        ...athleteFormData,
        // thoughtAuthor: Auth.getProfile().data.username,
      },
    });

    setAthleteFormData('');
  } catch (err) {
    console.error(err);
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setAthleteFormData({ ...athleteFormData, [name]: value });
  }
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

// function NewAthlete() {
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

export default AddAthlete;
