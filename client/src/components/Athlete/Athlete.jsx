//Should populate single athlete
import React from 'react';

import './athlete.css';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { GET_ATHLETE } from '../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { REMOVE_ATHLETE} from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function Athlete() {
  // Use 'useParams()' to retrieve value of the route parameter ':athleteId 
  const { athleteId } = useParams();
  const { loading, data } = useQuery(GET_ATHLETE, {
    variables: { athleteId: athleteId },
  });

  const athlete = data?.athlete || {};

  const [removeAthlete] = useMutation(REMOVE_ATHLETE);

  // create function that accepts the athlete's mongo _id value as param and deletes the athlete from the database
  const handleRemoveAthlete = async (athlete_id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeAthlete({
        variables: { athlete_id },
      });

      removeAthlete(athlete_id);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    
    <Card sx={{ maxWidth: 500 }} className="card">
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/update" style={{ textDecoration: 'none' }}>
        <Button size="small">Edit</Button>
       </Link> 
       {/* Needs to connect to MongoDB to REMOVE_ATHLETE */}
        <Button  onClick={() => handleRemoveAthlete(athlete.athlete_id)} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
