import { Button, TextField, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export const NormalTodo = ({ title }) => {
    const [listTodos, setListTodos] = useState({});

    const handleSubmit = inputValue => {
        setListTodos({
            ...listTodos,
            [inputValue]: { name: inputValue, isDone: false },
        });
    };

    const toogleTodo = ({ target: { name } }) => {
        setListTodos({
            ...listTodos,
            [name]: {
                ...listTodos[name],
                isDone: !listTodos[name].isDone,
            },
        });
    };

    const getTodoValues = () => Object.values(listTodos);

    const todoListValues = getTodoValues();

    return (
        <div
            style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                borderRadius: '5px',
                padding: '8px',
            }}
        >
            <TodoTitle>
                <h2>{title}</h2>
            </TodoTitle>
            <main>
                <TodoForm onSubmit={handleSubmit} />
            </main>
            <footer>
                {!todoListValues.length && <p>No todo added yet.</p>}
                <TodoList list={todoListValues} onChange={toogleTodo} />
            </footer>
        </div>
    );
};

const TodoTitle = ({ children }) => <header>{children}</header>;

const TodoForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <>
                <TextField
                    label='New todo:'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                />
            </>
            <Button type="submit">Add</Button>
        </form>
    );
};

const TodoList = ({ list, onChange }) => {
    return (
        <ul>
            {list.map(({ name, isDone }) => (
                <div key={name}>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox name={name}
                            checked={isDone}
                            onChange={onChange} />} label={`${name}`} style={{ textDecoration: isDone ? 'line-through' : '' }} />

                    </FormGroup>
                </div>
            ))}
        </ul>
    );
};

