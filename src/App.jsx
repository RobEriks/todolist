import { useState } from "react";
import Todo from "./components/Todo";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTask = { id: Date.now(), title: newTodo, done: false };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Lägg till något!"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length === 0 && <p>Ingen lista ännu :( </p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
