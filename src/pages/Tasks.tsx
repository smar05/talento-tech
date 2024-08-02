// src/pages/Tasks.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../redux/actions/taskActions";
import { RootState } from "../store/store";

const Tasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
        />
        <button className="btn btn-primary mt-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index: number) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeTask(task))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
