import React, { useState } from "react";

// Todo Item Component
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.6 : 1
      }}
      aria-label={todo.text + (todo.completed ? " completed" : "")}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark ${todo.text} as completed`}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
    </li>
  );
}

// Main Todo App Component
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const handleAdd = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
    setInput("");
  };

  // Toggle completed
  const handleToggle = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          aria-label="New todo"
          placeholder="Add a new task"
        />
        <button type="submit" disabled={!input.trim()}>
          Add
        </button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
