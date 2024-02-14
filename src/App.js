import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header />
      <div className="add-task-form">
        <input
          className="inputText"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />

        <Button
          variant="contained"
          color="success"
          onClick={addTask}
          size="medium"
        >
          Add Task
        </Button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(index)}
              {...label}
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              color="success"
              
            />
            <div className={task.completed ? "completed" : ""}>
            <span className="text">{task.text}</span>
            </div>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => deleteTask(index)}
              className="dltbtn"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
