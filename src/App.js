import { useState } from "react";
import "./App.css";
import TodoApp from "./Component/TodoApp";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import TodoItem from "./Component/TodoItem";
import { Container, Divider, List, Typography } from "@mui/material";
import PostList from "./Component/PostList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (deletedTodoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <TodoApp />
      <Divider sx={{ my: 5 }} />
      <PostList />
      <Divider sx={{ my: 5 }} />
      <Container maxWidth="sm">
        <AddTodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onUpdateTodo={handleUpdateTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </Container>
    </div>
  );
}

export default App;
