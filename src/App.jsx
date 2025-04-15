import { useEffect, useState } from "react";
import "./App.css";
import SearchBoard from "./components/SearchBoard/SearchBoard";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import FilterBoard from "./components/FilterBoard/FilterBoard";
import LightModeIcon from "./assets/icon/LightMode.icon"
import NightModeIcon from "./assets/icon/NightMode.icon";


function App() {
  const [task, setTask] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks):[]
  });

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(task))
  },[task])

  console.log(task)

  const [search, setSearch] = useState("");

  const [isDark, setIsDark] = useState(()=>{
    return localStorage.getItem('theme')==='dark';
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

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
      <div className="flex items-center dark:bg-[#121212]phone:justify-around shadow-md shadow-black/25 computer: justify-around">
        <h1 className="phone:hidden computer:inline font-bold text-xl dark:text-white ">My TODOs</h1>
        <button onClick={toggleDarkMode} className="phone:ml-2 inline computer:hidden cursor-pointer">{isDark ? <LightModeIcon /> : <NightModeIcon />}</button>
        <SearchBoard newSearchFilter={setSearch} />
        <div className="flex items-center justify-center gap-10">
          <AddTaskButton newTask={setTask} Task={task} />
          <button onClick={toggleDarkMode} className="computer:inline  phone:hidden cursor-pointer">{isDark ? <LightModeIcon /> : <NightModeIcon />}</button>
        </div>
      </div>

      

      <FilterBoard dateData ={dataFilter} dataSelected={setDataSelected} setDataFavorite={setDataFavorite} dataFavorite={dataFavorite} setDataProject={setDataPronect}/>
      <TaskBoard taskData={searchingTask} setTaskData={setTask} dateSelected={dataSelected} favoriteSection={dataFavorite} dataProject={dataProject} projectSection={dataFilterProject}/>
    </div>
  );
}

export default App;
