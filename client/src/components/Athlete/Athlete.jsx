//Should populate single athlete
import React from "react";
import "./athlete.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GET_ATHLETE } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { REMOVE_ATHLETE } from "../../utils/mutations";
import Auth from "../../utils/auth";
//import { useNavigate } from "react-router-dom";

export default function Athlete() {
  // Use 'useParams()' to retrieve value of the route parameter ':athleteId
  const { athleteId } = useParams();
  //const navigate = useNavigate();
  console.log(athleteId);
  const { loading, data } = useQuery(GET_ATHLETE, {
    variables: { athleteId: athleteId },
  });

  const athlete = data?.singleAthlete || {};

  const [removeAthlete] = useMutation(REMOVE_ATHLETE);

  // create function that accepts the athlete's mongo _id value as param and deletes the athlete from the database
  const handleRemoveAthlete = async (athlete) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { athlete } = await removeAthlete({
        variables: { athleteId: athleteId },
      });
      console.log(athlete);

      window.location.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card sx={{ maxWidth: 500 }} className="card">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {athlete.firstName} {athlete.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {athlete.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notes: {athlete.notes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Injury Report: {athlete.injuryReport}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/update/${athlete._id}`} style={{ textDecoration: "none" }}>
          <Button size="small">Edit</Button>
        </Link>
        {/* Needs to connect to MongoDB to REMOVE_ATHLETE */}
        <Button onClick={() => handleRemoveAthlete(athlete._id)} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
