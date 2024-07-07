import React from "react";
import axios from "axios";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { apiUrl } from "../Global/apiConfig";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const handleUpdateTodo = async () => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          ...todo,
          completed: !todo.completed,
        }
      );
      onUpdateTodo(response.data); // Update parent component state with updated todo
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await axios.delete(apiUrl + `/${todo.id}`);
      onDeleteTodo(todo.id); // Update parent component state to remove deleted todo
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <ListItem divider>
      <ListItemText
        primary={todo.title}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleUpdateTodo}>
          {todo.completed ? <DoneIcon /> : <span>&#x2610;</span>}
        </IconButton>
        <IconButton onClick={handleDeleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
