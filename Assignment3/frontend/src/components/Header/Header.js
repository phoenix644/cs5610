import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          {/* <Navbar.Brand href="/">Jote it!</Navbar.Brand> */}
          <Navbar.Brand>
            <Link style={{ color: "white" }} to="/">
              Jote it!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/mynotes">
                <Link to="/mynotes">My notes</Link>
              </Nav.Link>
              <NavDropdown
                title="Name of the user"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate("/");
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#">||</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#" disabled>
                Search your notes
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
