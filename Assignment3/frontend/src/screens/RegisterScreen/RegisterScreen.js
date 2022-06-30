import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

import MainScreen from "../../components/MainScreen";
import "./RegisterScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterScreen = (navigate) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

    //   if image type was one of these we will create a new formdat
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      //generic code for when we want to upload on cloudinary
      data.append("file", pics);
      data.append("upload_preset", "Jote-It");
      data.append("cloud_name", "jote-it");
      fetch("https://api.cloudinary.com/v1_1/Jote-It/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //after uploading cloudinary will send us back a url
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));
  };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}

          <Form.Group controlId="pic" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              label="Upload Profile Picture"
              accept="image/jpeg"
              custom
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            style={{ color: "black" }}
            type="submit"
          >
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;

//Before Redux
// // import React, { useState } from "react";
// // import { Button, Col, Form, Row } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import ErrorMessage from "../../components/ErrorMessage";
// // import MainScreen from "../../components/MainScreen";

// // const RegisterScreen = () => {
// //   const [email, setEmail] = useState("");
// //   const [name, setName] = useState("");
// //   // if user did not include any image profile import this to DB.
// //   const [pic, setPic] = useState(
// //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
// //   );
// //   const [password, setPassword] = useState("");
// //   const [confirmpassword, setConfirmPassword] = useState("");
// //   const [message, setMessage] = useState(null);
// //   const [picMessage, setPicMessage] = useState(null);
// //   const { error, setError } = useState(false);
// //   const { loading, setLoading } = useState(false);

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     console.log(email);
// //   };

// //   return (
// //     <MainScreen title="REGISTER">
// //       <div className="loginContainer">
// //         {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
// //         {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
// //         {loading && <Loading />} */}
// //         <Form onSubmit={submitHandler}>
// //           <Form.Group controlId="name">
// //             <Form.Label>Name</Form.Label>
// //             <Form.Control
// //               type="name"
// //               value={name}
// //               placeholder="Enter name"
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicEmail">
// //             <Form.Label>Email address</Form.Label>
// //             <Form.Control
// //               type="email"
// //               value={email}
// //               placeholder="Enter email"
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicPassword">
// //             <Form.Label>Password</Form.Label>
// //             <Form.Control
// //               type="password"
// //               value={password}
// //               placeholder="Password"
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </Form.Group>

// //           <Form.Group controlId="confirmPassword">
// //             <Form.Label>Confirm Password</Form.Label>
// //             <Form.Control
// //               type="password"
// //               value={confirmpassword}
// //               placeholder="Confirm Password"
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //             />
// //           </Form.Group>

// //           {/* {picMessage && (
// //             <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
// //           )} */}
// //           <Form.Group controlId="pic">
// //             <Form.Label>Profile Picture</Form.Label>
// //             <Form.File
// //               //   onChange={(e) => postDetails(e.target.files[0])}
// //               id="custom-file"
// //               type="image/png"
// //               label="Upload Profile Picture"
// //               custom
// //             />
// //           </Form.Group>

// //           <Button variant="primary" type="submit">
// //             Register
// //           </Button>
// //         </Form>
// //         <Row className="py-3">
// //           <Col>
// //             Have an Account ? <Link to="/login">Login</Link>
// //           </Col>
// //         </Row>
// //       </div>
// //     </MainScreen>
// //   );
// // };

// // export default RegisterScreen;

// import React, { useState } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";

// import { Link } from "react-router-dom";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";

// import MainScreen from "../../components/MainScreen";
// import "./RegisterScreen.css";
// import axios from "axios";

// const RegisterScreen = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [pic, setPic] = useState(
//     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//   );

//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);
//   const [picMessage, setPicMessage] = useState(null);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   //   useEffect(() => {
//   //     if (userInfo) {
//   //       history.push("/");
//   //     }
//   //   }, [history, userInfo]);

//   const postDetails = (pics) => {
//     if (
//       pics ===
//       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//     ) {
//       return setPicMessage("Please Select an Image");
//     }
//     setPicMessage(null);

//     //   if image type was one of these we will create a new formdat
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       //generic code for when we want to upload on cloudinary
//       data.append("file", pics);
//       data.append("upload_preset", "Jote-It");
//       data.append("cloud_name", "jote-it");
//       fetch("https://api.cloudinary.com/v1_1/Jote-It/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           //after uploading cloudinary will send us back a url
//           setPic(data.url.toString());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmpassword) {
//       setMessage("Passwords do not match");
//     } else {
//       setMessage(null);
//       try {
//         const config = {
//           headers: {
//             "Content-type": "application/json",
//           },
//         };

//         setLoading(true);

//         const { data } = await axios.post(
//           "/api/users",
//           { name, email, password, pic },
//           config
//         );

//         setLoading(false);
//         localStorage.setItem("userInfo", JSON.stringify(data));
//       } catch (error) {
//         console.log(error);
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <MainScreen title="REGISTER">
//       <div className="loginContainer">
//         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//         {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
//         {loading && <Loading />}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="name"
//               value={name}
//               placeholder="Enter name"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="confirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={confirmpassword}
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </Form.Group>

//           {picMessage && (
//             <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
//           )}

//           <Form.Group controlId="pic" className="mb-3">
//             <Form.Label>Profile Picture</Form.Label>
//             <Form.Control
//               type="file"
//               onChange={(e) => postDetails(e.target.files[0])}
//               id="custom-file"
//               label="Upload Profile Picture"
//               accept="image/jpeg"
//               custom
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Register
//           </Button>
//         </Form>
//         <Row className="py-3">
//           <Col>
//             Have an Account ? <Link to="/login">Login</Link>
//           </Col>
//         </Row>
//       </div>
//     </MainScreen>
//   );
// };

// export default RegisterScreen;
