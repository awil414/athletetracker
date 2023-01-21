import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../images/athletetracker.jpeg";
import "./home.css";

const AppHome = () => {
    return (
        <div className='bg-img' style={{ backgroundImage: `url(${BgImage})`}}>
          {" "}
          <Container className='d-flex align-items-center justify-content-center'>
            athletetracker
          </Container>
         
        </div>
      )
    }
    
    export default AppHome
