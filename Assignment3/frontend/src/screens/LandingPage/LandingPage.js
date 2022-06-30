// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { listUsers } from "../../actions/userActions";
// import "./LandingPage.css";

// const LandingPage = ({ navigate }) => {
//   // const dispatch = useDispatch();

//   const [users, setUsers] = useState([]);
//   navigate = useNavigate();

//   const fetchNotes = async () => {
//     const { data } = await axios.get(`/api/users/newmember`);
//     setUsers(data);
//   };

//   console.log(users);

//   // const userList = useSelector((state) => state.userList);
//   // const { loading, users, error } = userList;
//   // console.log(users);
//   // const [notes, setNotes] = useState([]);
//   // if user is loged in this will pushed us to mynotes pageXOffset.
//   useEffect(() => {
//     const userInfo = localStorage.getItem("userInfo");
//     fetchNotes();
//     // dispatch(listUsers());
//     //if there is something in localstorage we will going to push to mynotes page
//     if (userInfo) {
//       navigate("/mynotes");
//     }
//   }, [navigate]);

//   return (
//     <div className="main">
//       <Container>
//         <Row>
//           <Col>
//             <div className="intro-text">
//               <div>
//                 <h1 className="title">Welcome to Jote it. </h1>
//                 <p className="subtitle">
//                   Jot it Anywhere, as fast as possible.
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col
//             md={1}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <ListGroup
//               style={{
//                 maxheight: "200px",
//               }}
//             >
//               {users?.map((user) => (
//                 <ListGroup.Item>{user.name}</ListGroup.Item>
//               ))}
//             </ListGroup>
//             <Col
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="buttonContainer">
//                 <a href="/login">
//                   <Button
//                     variant="outline-dark"
//                     size="lg"
//                     className="landingbutton"
//                   >
//                     Login
//                   </Button>
//                 </a>
//                 <a href="/register">
//                   <Button
//                     bg="dark"
//                     variant="outline-dark"
//                     size="lg"
//                     className="landingbutton "
//                   >
//                     Signup
//                   </Button>
//                 </a>
//               </div>
//             </Col>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Carousel,
//   Col,
//   Container,
//   Form,
//   ListGroup,
//   Row,
// } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { listUsers } from "../../actions/userActions";
// import "./LandingPage.css";

// const LandingPage = ({ navigate }) => {
//   // const dispatch = useDispatch();

//   const [users, setUsers] = useState([]);
//   navigate = useNavigate();

//   const fetchNotes = async () => {
//     const { data } = await axios.get(`/api/users/newmember`);
//     setUsers(data);
//   };

//   console.log(users);

//   // const userList = useSelector((state) => state.userList);
//   // const { loading, users, error } = userList;
//   // console.log(users);
//   // const [notes, setNotes] = useState([]);
//   // if user is loged in this will pushed us to mynotes pageXOffset.
//   useEffect(() => {
//     const userInfo = localStorage.getItem("userInfo");
//     fetchNotes();
//     // dispatch(listUsers());
//     //if there is something in localstorage we will going to push to mynotes page
//     if (userInfo) {
//       navigate("/mynotes");
//     }
//   }, [navigate]);

//   return (
//     <div className="main">
//       <Carousel>
//         {users?.map((user) => (
//           <div>
//             <Carousel.Item>
//               <img className="d-block w-100" src={user.pic} alt="First slide" />
//               <Carousel.Caption>
//                 <h3>New Members</h3>
//                 <p>{user.name}</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </div>
//         ))}
//       </Carousel>
//       <Container>
//         <Row>
//           <div className="intro-text2">
//             <div>
//               <h1 className="title">Welcome to Jot it. </h1>
//               <p className="subtitle">Jot it Anywhere, as fast as possible.</p>
//             </div>
//           </div>

//           <div className="intro-text">
//             <div className="buttonContainer">
//               <a href="/login">
//                 <Button
//                   variant="outline-dark"
//                   size="lg"
//                   className="landingbutton"
//                 >
//                   Login
//                 </Button>
//               </a>
//               <a href="/register">
//                 <Button
//                   bg="dark"
//                   variant="outline-dark"
//                   size="lg"
//                   className="landingbutton "
//                 >
//                   Signup
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect, useState } from "react";
import { Alert, Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Ticker from "react-ticker";
import axios from "axios";

const LandingPage = ({ navigate }) => {
  navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get(`/api/users/newmember`);
    setUsers(data);
  };
  console.log(users);
  // if user is loged in this will pushed us to mynotes pageXOffset.
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    fetchNotes();
    //if there is something in localstorage we will going to push to mynotes page
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text2">
            <div>
              <h1 className="title">Welcome to Jot it. </h1>
              <p className="subtitle">Jot it Anywhere, as fast as possible.</p>
            </div>
            <p style={{ fontSize: "19px" }}>Check who is newly joined us</p>
            {users?.map((user) => (
              <Alert
                style={{ fontSize: "15px", maxWidth: "300px" }}
                key="warning"
                variant="warning"
              >
                {user.name} Became our new member.
              </Alert>
            ))}
          </div>
          <div className="intro-text">
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
