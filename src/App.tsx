import { useEffect, useState } from "react";
import "./App.css";
import SearchBoard from "./components/SearchBoard/SearchBoard";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import FilterBoard from "./components/FilterBoard/FilterBoard";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      taskDescription: "Preparate a coffee",
      date: "2025-02-25",
      group: null,
      favorite:false,
      completed:false,
    },
    {
      id: 2,
      taskDescription: "Play Aram",
      date: "2025-02-25",
      group: null,
      favorite:false,
      completed:false,
    },
    {
      id: 3,
      taskDescription: "Programming the ToDoProgram",
      date: "2025-03-1",
      group: null,
      favorite:false,
      completed:false,
    },
  ]);

  const [search, setSearch] = useState("");

  const searchingTask = task.filter((task) =>
    task.taskDescription.toLowerCase().includes(search.toLowerCase())
  );

  const [dataFilter,setDataFilter] = useState([]);

  const [dataSelected,setDataSelected]= useState(null)

  console.log(dataSelected)
  
  useEffect(()=>{
    const singleData = task.reduce((acc, date) => {
      if (!acc.includes(date.date)) {
        acc.push(date.date);
      }
      return acc;
    }, []);
    // console.log(singleData)
    setDataFilter(singleData)

  },[task])
  
  // console.log(dataFilter)



  return (
    <div className="containerToDo">
      <div>
        <h1 className="titleToDo">My TODOs</h1>
        <SearchBoard newSearchFilter={setSearch} />
        <AddTaskButton newTask={setTask} />
      </div>
      <FilterBoard dateData ={dataFilter} dataSelected={setDataSelected}/>
      <TaskBoard taskData={searchingTask} setTaskData={setTask} dateSelected={dataSelected}/>
    </div>
  );
}

export default App;
