import React, { useState, FC, ReactNode } from 'react';
import { Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

interface Todo {
  [key: string]: {
    name: string;
    isDone: boolean;
  };
}

interface TodoProps {
  title: string;
}

interface TodoTitle {
    children: ReactNode;
  }
  

export const NormalTodo: FC<TodoProps> = ({ title }) => {
  const [listTodos, setListTodos] = useState<Todo>({});

  const handleSubmit = (inputValue: string) => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
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

const TodoTitle: FC<TodoTitle> = ({ children }) => <header>{children}</header>;

interface TodoFormProps {
  onSubmit: (inputValue: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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

interface TodoListProps {
  list: Array<{ name: string; isDone: boolean }>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoList: FC<TodoListProps> = ({ list, onChange }) => {
  return (
    <ul>
      {list.map(({ name, isDone }) => (
        <div key={name}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name={name} checked={isDone} onChange={onChange} />}
              label={`${name}`}
              style={{ textDecoration: isDone ? 'line-through' : '' }}
            />
          </FormGroup>
        </div>
      ))}
    </ul>
  );
};