import { useState } from "react";
import "./App.css";
import SearchBoard from "./components/SearchBoard/SearchBoard";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      taskDescription: "Preparate a coffee",
    },
    {
      id: 2,
      taskDescription: "Play Aram",
    },
    {
      id: 3,
      taskDescription: "Programming the ToDoProgram",
    },
  ]);

  const [search, setSearch] = useState("");

  const searchingTask = task.filter((task) =>
    task.taskDescription.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="containerToDo">
      <h1 className="titleToDo">My TODOs</h1>
      <SearchBoard newSearchFilter={setSearch} />
      <TaskBoard taskData={searchingTask} />
      <AddTaskButton newTask={setTask} />
    </div>
  );
}

export default App;
