import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TakList from "./TakList";

const initialTasks = [
  { id: 1, task: "Become Software Leader", done: false },
  { id: 2, task: "Buy Your Own Car", done: true },
  { id: 3, task: "Build Your Own House", done: false },
];
let nextId = 4;

const Task = () => {
  const [updatedTasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAdd = (task) => {
    dispatch({
      type: "add",
      id: nextId++,
      task: task,
    });
  };

  const handleUpdate = (task) => {
    dispatch({
      type: "update",
      task: task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
      <AddTask handleAdd={handleAdd} />
      <TakList
        tasks={updatedTasks}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

const taskReducer = (updatedTasks, action) => {
  switch (action.type) {
    case "add": {
        return [
            ...updatedTasks, 
            { id: action.id, task: action.task, done: false }
        ];
    }
    case "update": {
      return updatedTasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    }
    case "delete": {
      return updatedTasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default Task;
