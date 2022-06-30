import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

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

//receive the search from states in app which was updated by header using setsearch.

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useSelector Hook.
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;
  // const [notes, setNotes] = useState([]);

  //to get the user info to see if they were not logined move them to login screen.
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate; // whenever this fire offs it run useeffect again.
  //so we use successCreate as dependency to useeffect as well.

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;
  //to able to refresh the mynotes after editing a notes.

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  // const fetchNotes = async () => {
  //   const { data } = await axios.get("/api/notes");
  //   setNotes(data);
  // };

  //console.log(notes);

  useEffect(() => {
    // fetchNotes();
    //call our action in note actions.
    dispatch(listNotes());
    //check if there was nothing in the user info move user to login screen.
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);
  //also this useeffect is dependant on navigate and useInfo as we see if useInfo changes it going to do naviagte.
  //(reload all of the notes on delete for example)

  return (
    <MainScreen title={`Here you go, Jot it down right away ${userInfo.name}`}>
      <Link nk to="/createNote">
        <Button
          variant="outline-warning"
          style={{ marginLeft: 10, marginBottom: 6, color: "black" }}
          size="lg"
        >
          Create New Note
        </Button>
      </Link>
      {/* wanna put something based on our redux state on line 46 we check if it
      was loading or error we load other components */}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {/* we use reverse to list it from newer to oldest notes. */}
      {notes
        ?.reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ background: "Snow", display: "flex" }}>
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
                  <Button variant="secondary" href={`/note/${note._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    style={{ color: "black" }}
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
                    <p>
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                    </p>
                    <footer className="blockquote-footer">
                      Created on -{" "}
                      <cite title="Source Title">
                        {note.createdAt.substring(0, 10)}
                      </cite>
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
