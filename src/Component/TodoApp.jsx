import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo, toggleTodo } from '../Global/todoActions';
import { setTheme } from '../Global/settingsActions';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const theme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    dispatch(addTodo(newTodo));
    setInput('');
  };

  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.value));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>
      <TextField
        label="New Todo"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo} fullWidth>
        Add Todo
      </Button>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id} divider>
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
            <IconButton edge="end" onClick={() => dispatch(removeTodo(todo.id))}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(updateTodo({ ...todo, text: 'Updated Todo' }))}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Select
        value={theme}
        onChange={handleThemeChange}
        displayEmpty
        fullWidth
        margin="normal"
      >
        <MenuItem value="light">Light Theme</MenuItem>
        <MenuItem value="dark">Dark Theme</MenuItem>
      </Select>
    </Container>
  );
};

export default TodoApp;
