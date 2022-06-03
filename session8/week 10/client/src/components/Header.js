import Button from 'react-bootstrap/Button';

export default function Header({name, onAddClick, showForm}) {
  return (
    <header className="header">
        <h1>Welcome to {name}</h1>
        <Button onClick={onAddClick}>{showForm?'Close':'Add Task'}</Button>
    </header>
  )
}


 