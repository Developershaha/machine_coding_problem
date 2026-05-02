import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  // Add TODO
  const handleAddTodo = () => {
    const value = input.trim();
    if (!value) return;

    const item = {
      id: Date.now(), // ✅ better than new Date()
      text: value,
      completed: false,
    };

    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  // Toggle complete
  const handleCheckTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Delete TODO
  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckTodo(todo.id)}
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => {
                if (todo?.completed) handleDelete(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
