import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Jot it. </h1>
              <p className="subtitle">Jot it Anywhere, as fast as possible.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="landingbutton"
                >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  bg="dark"
                  variant="outline-dark"
                  size="lg"
                  className="landingbutton float-right"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
