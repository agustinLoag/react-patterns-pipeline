import React, { useState, createContext, useContext, FC, ReactNode } from 'react';
import { Checkbox, Button, FormGroup, FormControlLabel, TextField } from '@mui/material';

interface Todo {
  [key: string]: {
    name: string;
    isDone: boolean;
  };
}

interface TodoContextProps {
  handleSubmit: (inputValue: string) => void;
  toogleTodo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getTodoValues: () => Array<{ name: string; isDone: boolean }>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

const { Provider } = TodoContext;

interface FinalTodoProps {
  children: ReactNode;
}

export const FinalTodo: FC<FinalTodoProps> & {
  Title: FC<FinalTodoProps>;
  Form: FC;
  List: FC;
} = ({ children }) => {
  const [listTodos, setListTodos] = useState<Todo>({});

  const handleSubmit = (inputValue: string) => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListTodos({
      ...listTodos,
      [event.target.name]: {
        ...listTodos[event.target.name],
        isDone: !listTodos[event.target.name].isDone,
      },
    });
  };

  const getTodoValues = () => Object.values(listTodos);

  const valuesProvider: TodoContextProps = {
    handleSubmit,
    toogleTodo,
    getTodoValues,
  };

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <Provider value={valuesProvider}>{children}</Provider>
    </div>
  );
};

export const TodoTitle: FC<FinalTodoProps> = ({ children }) => <header>{children}</header>;

export const TodoForm: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { handleSubmit } = useContext(TodoContext) as TodoContextProps;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const _handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={_handleSubmit}>
      <>
        <TextField label='New todo:' type="text" value={inputValue} onChange={handleInputChange} required />
      </>
      <Button type="submit">Add</Button>
    </form>
  );
};

export const TodoList: FC = () => {
  const { toogleTodo, getTodoValues } = useContext(TodoContext) as TodoContextProps;

  const list = getTodoValues();

  return (
    <ul>
      {list.map(({ name, isDone }) => (
        <div key={name}>
          <label>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name={name} checked={isDone} onChange={toogleTodo} />}
                label={`${name}`}
                style={{ textDecoration: isDone ? 'line-through' : '' }}
              />
            </FormGroup>
          </label>
        </div>
      ))}
    </ul>
  );
};

FinalTodo.Title = TodoTitle;
FinalTodo.Form = TodoForm;
FinalTodo.List = TodoList;
