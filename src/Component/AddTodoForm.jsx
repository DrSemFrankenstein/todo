import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';
import { apiUrl } from '../Global/apiConfig';

const AddTodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(apiUrl, {
        title: input,
        completed: false
      });
      onAddTodo(response.data); // Update parent component state with new todo
      setInput('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          label="New Todo"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          fullWidth
        >
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodoForm;
