import { render, screen } from '@testing-library/react';
import Header from '../Header';
import userEvent from '@testing-library/user-event';

test('Header name', () => {
  render(<Header name="test app" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

test('Header button text Form showing', () => {
    render(<Header showForm={true} />);
    const closeButton = screen.getByRole("button",{name:"Close"})
    expect(closeButton).toBeEnabled();
    expect(closeButton).toBeInTheDocument();
    const addTaskButton = screen.queryByRole("button",{name:"Add Task"});
    expect(addTaskButton).toBeNull();
    expect(addTaskButton).not.toBeInTheDocument();
  });
  
  test('Header button text Form not showing', () => {
    render(<Header showForm={false} />);
    const addTaskButton = screen.getByRole("button",{name:"Add Task"})
    expect(addTaskButton).not.toBeDisabled();
    expect(addTaskButton).toBeInTheDocument();
    const closeButton = screen.queryByRole("button",{name:"Close"})
    expect(closeButton).not.toBeInTheDocument();

  });

  test('Header button click calls the onClick handler', async () => {
    const onAddClick = jest.fn();

    render(<Header onAddClick={onAddClick} />);

    const addTaskButton = screen.getByRole("button",{name:"Add Task"})
    const user = userEvent.setup();

    await user.click(addTaskButton);
    expect(onAddClick).toHaveBeenCalled();

  });