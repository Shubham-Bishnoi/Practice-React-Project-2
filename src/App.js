import { useState } from "react";
import "./App.css";

function App() {
  //Initial State Variable
  const [todos, setTodos] = useState([{}]);

  const [camel, setCamel] = useState(0);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  // 1st component
  function addTodos() {
    if (newTodo.title && newTodo.description) {
      setTodos([
        ...todos,
        { title: newTodo.title, description: newTodo.description, done: false },
      ]);
      setNewTodo({ tittle: "", description: "" });
    } else {
      alert("Please fill in the both fields.");
    }
  }

  // Toggle the "done" status of a todo
  function toggleDone(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }

  // Delete a todo
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      {camel}
      <button onClick={() => handleButton("videoId")}>
        INcrease value of k by 1
      </button>
      {camel === 30 ? (
        <h1>My todo Application</h1>
      ) : (
        <h1 style={{ color: "red" }}>My todo Application</h1>
      )}
      video
      {/* Form to add new todos */}
      <div className="todo-form">
        <input
          type="text"
          placeholder="Tittle"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        ></input>
        <button onClick={addTodos}>Add Todo</button>
      </div>
      {/* Display the list of todos */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? "done" : ""}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <div className="actions">
              <button onClick={() => toggleDone(index)}>
                {todo.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
