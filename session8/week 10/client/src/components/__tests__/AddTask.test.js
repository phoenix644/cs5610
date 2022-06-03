import { render, screen } from '@testing-library/react';
import AddTask from '../AddTask';
import userEvent from '@testing-library/user-event'

test('Navigation links', async () => {
    render(
        <AddTask />)
    const taskInput = screen.getByLabelText(/task/i);
    expect(taskInput).toBeInTheDocument();
    const dateInput = screen.getByLabelText(/day and time/i);
    expect(dateInput).toBeInTheDocument();
    const user = userEvent.setup()

    await user.type(taskInput, 'Study');
    expect(taskInput.value).toBe('Study');
});