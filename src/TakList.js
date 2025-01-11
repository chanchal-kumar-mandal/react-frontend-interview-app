import React, { useState } from "react";

const TakList = ({ tasks, handleUpdate, handleDelete }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="p-4 bg-gray-100 rounded shadow">
          <Task task={task} onChange={handleUpdate} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task, onChange, onDelete }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  let taskContent;

  if (isUpdating) {
    taskContent = (
      <div className="flex items-center w-full">
        <input
          value={task.task}
          onChange={(e) =>
            onChange({
              ...task,
              task: e.target.value,
            })
          }
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={() => setIsUpdating(false)}
          className="ml-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
        >
          Save
        </button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex items-center justify-between w-full">
        <span className="flex-1 text-black">{task.task}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsUpdating(true)}
            className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChange({
              ...task,
              done: e.target.checked,
            })
          }
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        {taskContent}
      </label>
    </div>
  );
};

export default TakList;
