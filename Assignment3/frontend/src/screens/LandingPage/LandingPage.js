import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({ navigate }) => {
  navigate = useNavigate();
  // if user is loged in this will pushed us to mynotes pageXOffset.
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    //if there is something in localstorage we will going to push to mynotes page
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Jote it. </h1>
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
                  className="landingbutton "
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
