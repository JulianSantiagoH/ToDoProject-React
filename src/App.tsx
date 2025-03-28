import { useEffect, useState } from "react";
import "./App.css";
import SearchBoard from "./components/SearchBoard/SearchBoard";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import FilterBoard from "./components/FilterBoard/FilterBoard";
import lightMode from "./assets/icon/lightModeIcon.png"
import nightMode from "./assets/icon/nightModeIcon.png"

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      taskDescription: "Preparate a coffee",
      date: "2025-02-25",
      project: 'Cooking',
      difficult:'easy',
      favorite:true,
      completed:false,
    },
    {
      id: 2,
      taskDescription: "Play Aram",
      date: "2025-03-25",
      project: 'Playing',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 3,
      taskDescription: "Programming the ToDoProgram dasdas",
      date: "2025-03-1",
      project: 'Studying',
      difficult:'medium',
      favorite:true,
      completed:false,
    },
    {
      id: 4,
      taskDescription: "Studying React",
      date: "2025-04-20",
      project: 'Daily',
      difficult:'hard',
      favorite:true,
      completed:false,
    },
    {
      id: 5,
      taskDescription: "Cook An Egg",
      date: "2025-02-25",
      project: 'Cooking',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 6,
      taskDescription: "Make a Cake",
      date: "2025-02-25",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },
    {
      id: 14,
      taskDescription: "Studying React",
      date: "2025-04-28",
      project: 'Daily',
      difficult:'hard',
      favorite:true,
      completed:false,
    },
    {
      id: 15,
      taskDescription: "Cook An Egg",
      date: "2025-02-30",
      project: 'Cooking',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 16,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },
    {
      id: 25,
      taskDescription: "Cook An Egg",
      date: "2025-02-30",
      project: 'Cooking',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 26,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },

    {
      id: 36,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },
    {
      id: 21,
      taskDescription: "Cook An Egg",
      date: "2025-02-30",
      project: 'Cooking',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 22,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },
    {
      id: 35,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
    },
    {
      id: 31,
      taskDescription: "Cook An Egg",
      date: "2025-02-30",
      project: 'Cooking',
      difficult:'easy',
      favorite:false,
      completed:false,
    },
    {
      id: 32,
      taskDescription: "Make a Cake",
      date: "2025-02-22",
      project: 'Cooking',
      difficult:'hard',
      favorite:true,
      completed:true,
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
  
  // console.log(dataFilterProject)

  return (
    <div>
      <div className="flex items-center phone: justify-around shadow-md shadow-black/25">
        <h1 className="phone:hidden">My TODOs</h1>
        <button className="phone:ml-2"><img src={lightMode} alt="" /></button>
        <SearchBoard newSearchFilter={setSearch} />
        <AddTaskButton newTask={setTask} />
        
      </div>

      <FilterBoard dateData ={dataFilter} dataSelected={setDataSelected} setDataFavorite={setDataFavorite} dataFavorite={dataFavorite} setDataProject={setDataPronect}/>
      <TaskBoard taskData={searchingTask} setTaskData={setTask} dateSelected={dataSelected} favoriteSection={dataFavorite} dataProject={dataProject} projectSection={dataFilterProject}/>
    </div>
  );
}

export default App;
