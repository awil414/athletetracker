import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../images/athletetracker.jpeg";
import "./home.css";
import Typewriter from "typewriter-effect";

const AppHome = () => {
  return (
    <div className="bg-img" style={{ backgroundImage: `url(${BgImage})` }}>
      {" "}
      <Container className="d-flex align-items-center justify-content-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("athletetracker")
              .pauseFor(1000)
              .deleteAll(200)
              .typeString(
                '<span style="color: red;">athlete</span><span style="color: grey;">tracker</span>'
              )
              .start();
          }}
        />
      </Container>
    </div>
  );
};

export default AppHome;
