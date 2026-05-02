import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    const item = {
      id: new Date(),
      text: input,
      completed: false,
    };
    setInput("");

    setTodos((prev) => {
      return [...prev, item];
    });
  };

  const handleCheckBox = (id) => {
    const newItem = todos?.find((todo) => todo?.id === id);
    console.log("newItem", newItem);
    if (!newItem) return;
    setTodos((prev) =>
      prev?.map((todo) =>
        todo?.id === id ? { ...newItem, completed: true } : todo,
      ),
    );
  };

  const markCompletedTodo = (id) => {
    setTodos(
      todos?.map((todo) => {
        if (todo?.id === id) {
          return {
            ...todo,
            completed: !todo?.completed,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const deleteTodo = (id) => {
    const data = todos?.filter((todo) => todo?.id !== id);
    console.log("data", data);

    setTodos(todos?.filter((todo) => todo?.id !== id));
  };
  return (
    <>
      <h1>My TodoList </h1>
      <div>
        <input
          type="text"
          value={input}
          placeholder="enter Todo"
          onChange={(e) => {
            setInput(e?.target?.value);
          }}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos?.map((todo) => (
            <li key={todo?.id}>
              <input
                type="checkbox"
                checked={todo?.completed}
                onClick={() => {
                  markCompletedTodo(todo?.id);
                }}
              />{" "}
              <span
                style={
                  todo?.completed ? { textDecoration: "line-through" } : {}
                }
              >
                {todo?.text}
              </span>{" "}
              <button onClick={() => deleteTodo(todo?.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
