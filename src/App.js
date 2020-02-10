import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { title: "faire les courses", isDone: false },
    { title: "Arroser le splantes", isDone: false },
    { title: "Aller au musée", isDone: true },
    { title: "Nettoyer la voiture", isDone: true }
  ]);
  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <div>
      <h1>ToDo List</h1>

      {tasks.map((task, index) => {
        return (
          <div>
            <input
              checked={task.isDone}
              type="checkbox"
              onClick={() => {
                const newTasks = [...tasks];
                newTasks[index].isDone = !newTasks[index].isDone;
                setTasks(newTasks);
              }}
            />
            <span className={task.isDone === true ? "checked" : ""}>
              {task.title}
            </span>
            <button
              onClick={() => {
                const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
              }}
            >
              Supprimer
            </button>
          </div>
        );
      })}

      <form
        onSubmit={event => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({
            title: newTaskInput,
            isDone: false
          });
          setTasks(newTasks);
          setNewTaskInput("");
        }}
      >
        <input
          type="text"
          value={newTaskInput}
          onChange={event => {
            const value = event.target.value;
            setNewTaskInput(value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
