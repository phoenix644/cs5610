import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
export default function AddTask() {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    // const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!text) {
            alert("please add a task");
            return
        }
        // onAdd({text, date});
        await fetch("http://localhost:5000/tasks/",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ text, date })
            })
        // task.id = Math.floor(Math.random() * 10000) + 1;
        // console.log("add", data);

        // setTasks([...tasks, data]);
        // navigate('/tasks')


        setText('');
        setDate('');
        // navigate('/tasks')

    }
    return (
    //     <Container>
    //     <Form onSubmit={onSubmit}>
    //         <Row>
    //             <Col className="mb-3" sm>
    //                 {/* <div className="form-control"> */}
    //                 <Form.Label htmlFor="taskInput">Task</Form.Label>
    //                 <Form.Control id="taskInput" type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
    //                 {/* </div> */}
    //             </Col>
    //             <Col className="mb-3" sm>
    //                 {/* <div className="form-control"> */}
                    
    //                 <Form.Label htmlFor="dateInput">Day and time  </Form.Label>
    //                 <Form.Control id="dateInput" type="text" value={date} onChange={(e) =>
    //                     setDate(e.target.value)} />
    //                 {/* </div> */}
    //              </Col>
    //         </Row>
    //         <Button type="submit" variant="secondary" > Save Task </Button>
    //     </Form>
    // </Container>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input id="task" type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            </div>
            <div className="form-control">
                <label htmlFor='date'>Day and time</label>
                <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <input type="submit" value="Save Task" />
        </form>
    )
}
