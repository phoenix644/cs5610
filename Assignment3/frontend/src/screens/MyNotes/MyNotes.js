import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesActions";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <span
      style={{
        color: "black",
        textDecoration: "none",
        flex: 1,
        cursor: "pointer",
        alignSelf: "center",
        fontSize: 18,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </span>
    // <button
    //   type="button"
    //   style={{ backgroundColor: "white" }}
    //   onClick={decoratedOnClick}
    // >
    //   {children}
    // </button>
  );
}

const MyNotes = () => {
  const dispatch = useDispatch();

  //useSelector Hook.
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;
  // const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  // const fetchNotes = async () => {
  //   const { data } = await axios.get("/api/notes");
  //   setNotes(data);
  // };

  console.log(notes);

  useEffect(() => {
    // fetchNotes();
    //call our action in note actions.
    dispatch(listNotes());
  }, [dispatch]);

  return (
    <MainScreen title="Here you go, Jote it down right away.">
      <Link nk to="creaWtenote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes?.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              {/* <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              > */}
              <CustomToggle eventKey={note._id}>{note.title}</CustomToggle>
              {/* <Accordion.Item as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Item> */}
              {/* </span> */}
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={note._id}>
              <Card.Body>
                <h4>
                  <Badge variant="success">Category- {note.category}</Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
