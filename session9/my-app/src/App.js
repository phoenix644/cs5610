// import logo from './logo.svg';
// import './App.css';
import './Header.js';

function App() {
  
  const appName =  "My App";

  return (
   
      <>
      <Header title={appName} /><ul>   test 



      </ul>
      </>
       
  );
}

function Header(props) {
  return (
  <div>
      <h1>Hello, {props.title}</h1>
      <button> Add Task</button>
  </div>

);}


const tasks = [
  {
  id: 1,
  title: 'Review session 9 material',
  date: 'June 4th at 1 pm',
  },
  {
  id: 2,
  title : 'Do quiz 9',
  date: 'June 4th at 6 pm',
  },
  {
  id: 3,
  title : 'Work on assignment 2',
  date: 'June 5th at 8 am',
  },
  ];

  const tasksItems = tasks.map((task) =>
    <li >
      {task.id}
    </li>
    <li >
    {task.title}
  </li>
  <li >
  {task.date}
</li>

 export default App;
