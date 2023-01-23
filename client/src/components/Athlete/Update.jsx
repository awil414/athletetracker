//We will use NewAthlete form.

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ATHLETE, REMOVE_ATHLETE} from '../../utils/mutations';
import "./athlete.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {QUERY_ME, QUERY_GET_ATHLETE } from '../../utils/queries';

// import Auth from '../../utils/auth';

const AddAthlete = () => {
  const [athleteFormData, setAthleteFormData] = useState('')

  const [addAthlete, { error, data }] = useMutation(UPDATE_ATHLETE );




const handleFormSubmit = async (event) => {
  event.preventDefault();

  try {
    const { data } = await addAthlete({
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






// function NewAthlete() {
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
        Update
      </Button>
    </Form>
  );
};


export default AddAthlete;

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import { GET_ATHLETE } from '../../utils/queries';
// import { useQuery, useMutation } from '@apollo/client';
// import { useParams } from 'react-router-dom';

// export default function NewAthlete() {
//   // Use 'useParams()' to retrieve value of the route parameter ':athleteId 
//   const { athleteId } = useParams();
//   const { loading, data } = useQuery(GET_ATHLETE, {
//     variables: { athleteId: athleteId },
//   });

//   const athlete = data?.athlete || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <Card sx={{ maxWidth: 500 }} className="card">
//       <CardMedia
//         sx={{ height: 200 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Edit</Button>
//         <Button size="small">Delete</Button>
//       </CardActions>
//     </Card>
//   );
// }
