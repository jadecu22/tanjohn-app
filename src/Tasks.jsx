import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";

const tasks = [
  {
    description: "Task 1",
    assignee: "John",
    deadline: "2024-08-01",
    status: "Pending",
  },
  {
    description: "Task 2",
    assignee: "Jane",
    deadline: "2024-08-02",
    status: "Pending",
  },
  {
    description: "Task 3",
    assignee: "Mike",
    deadline: "2024-08-03",
    status: "Completed",
  },
  {
    description: "Task 4",
    assignee: "Lisa",
    deadline: "2024-08-04",
    status: "Pending",
  },
  {
    description: "Task 5",
    assignee: "John",
    deadline: "2024-08-05",
    status: "Pending",
  },
  {
    description: "Task 6",
    assignee: "Jane",
    deadline: "2024-08-06",
    status: "Completed",
  },
  {
    description: "Task 7",
    assignee: "Mike",
    deadline: "2024-08-07",
    status: "Pending",
  },
  {
    description: "Task 8",
    assignee: "Lisa",
    deadline: "2024-08-08",
    status: "Completed",
  },
  {
    description: "Task 9",
    assignee: "John",
    deadline: "2024-08-09",
    status: "Pending",
  },
  {
    description: "Task 10",
    assignee: "Jane",
    deadline: "2024-08-10",
    status: "Completed",
  },
];

const Task = ({ task, onToggleStatus }) => (
  <div>
    <p>{task.description}</p>
    <p>{task.assignee}</p>
    {task.status === "Pending" && <p>{task.deadline}</p>}
    <p>{task.status}</p>
    <button onClick={() => onToggleStatus(task.description)}>
      Toggle Status
    </button>
  </div>
);

const Tasks = () => {
  const [taskList, setTaskList] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    const filtered = taskList.filter((task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchQuery, taskList]);

  const toggleStatus = (description) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.description === description
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredTasks.map((task, index) => (
        <Task key={index} task={task} onToggleStatus={toggleStatus} />
      ))}
    </div>
  );
};

export default Tasks;
