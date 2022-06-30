import React from "react";
import Ticker from "react-ticker";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import MoveStuffAround from "../Ticker";
// import ScrollTicker from "../ScrollTicker";
//we receive this setsearch here.
const Header = ({ setSearch }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {/* <MoveStuffAround /> */}

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
            {userInfo ? (
              <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/mynotes">
                  <Link to="/mynotes">My notes</Link>
                </Nav.Link>
                {/* this '?' is optional chaining means if it was not available show nothing */}
                <NavDropdown
                  title={userInfo?.name}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    // onClick={() => {
                    //   localStorage.removeItem("userInfo");
                    //   navigate("/");
                    // }}
                    onClick={logoutHandler}
                  >
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", color: "white" }}
                navbarScroll
              >
                <Nav.Link href="/login">
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </nav>
            )}
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
                  onChange={(e) => setSearch(e.target.value)}
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
