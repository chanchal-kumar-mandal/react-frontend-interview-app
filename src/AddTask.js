import React, { useState } from "react";

const AddTask = ({ handleAdd }) => {
  const [task, setTask] = useState("");

  return (
    <div className="mb-6 flex items-center">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task name"
        className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {
          handleAdd(task);
          setTask("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
