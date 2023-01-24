import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab, Image } from "react-bootstrap";
import SignUpForm from "../SignUp";
import LoginForm from "../LoginForm";
import Auth from "../../utils/auth";
import "./navbar.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="navbar">
        <Container fluid>
          <Navbar.Brand eventKey="1" as={Link} to="/">
            <span className="athlete">athlete</span>
            <span className="tracker">tracker</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/waiver">
                Waiver
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    Current Athletes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add">
                    Add Athlete
                  </Nav.Link>
                  <Nav.Link as={Link} to="/venmo">
                    Payment
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container className="modal" defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav className="nav-items">
                <Nav.Item className="nav-item">
                  <Nav.Link style={{ color: "blue" }} eventKey="login">
                    Log In
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
