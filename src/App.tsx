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
      project: 'Cooking',
      favorite:true,
      completed:false,
    },
    {
      id: 2,
      taskDescription: "Play Aram",
      date: "2025-03-25",
      project: 'Daily',
      favorite:false,
      completed:false,
    },
    {
      id: 3,
      taskDescription: "Programming the ToDoProgram",
      date: "2025-03-1",
      project: null,
      favorite:true,
      completed:false,
    },
    {
      id: 4,
      taskDescription: "Studying React",
      date: "2025-04-20",
      project: 'Daily',
      favorite:false,
      completed:false,
    },
    {
      id: 5,
      taskDescription: "Cook An Egg",
      date: "2025-02-25",
      project: 'Cooking',
      favorite:false,
      completed:false,
    },
    {
      id: 6,
      taskDescription: "Make a Cake",
      date: "2025-02-25",
      project: 'Cooking',
      favorite:true,
      completed:false,
    },
  ]);

  const [search, setSearch] = useState("");

  const searchingTask = task.filter((task) =>
    task.taskDescription.toLowerCase().includes(search.toLowerCase())
  );

  const [dataFilter,setDataFilter] = useState([]);

  const [dataFilterProject,setDataFilterProject] = useState([]);

  const [dataSelected,setDataSelected]= useState(null)

  const [dataFavorite,setDataFavorite] = useState(false);
  
  const [dataProject,setDataPronect] = useState(false);

  // console.log(dataSelected)
  
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

  useEffect(()=>{
    const singleProject = task.reduce((acc, {project}) => {
      const existingProject = acc.find(item => item.project === project);
      if(existingProject){
        existingProject.count +=1
      }else{
        acc.push({id:acc.length + 1 ,project, count:1})
      }
      return acc;
    }, []);
    // console.log(singleData)
    setDataFilterProject(singleProject)

  },[task])
  
  console.log(dataFilterProject)

  return (
    <div className="containerToDo">
      <div>
        <h1 className="titleToDo">My TODOs</h1>
        <SearchBoard newSearchFilter={setSearch} />
        <AddTaskButton newTask={setTask} />
      </div>
      <FilterBoard dateData ={dataFilter} dataSelected={setDataSelected} setDataFavorite={setDataFavorite} dataFavorite={dataFavorite} setDataProject={setDataPronect}/>
      <TaskBoard taskData={searchingTask} setTaskData={setTask} dateSelected={dataSelected} favoriteSection={dataFavorite} dataProject={dataProject} projectSection={dataFilterProject}/>
    </div>
  );
}

export default App;
