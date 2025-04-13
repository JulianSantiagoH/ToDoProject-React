import { useEffect, useState } from "react";
import Select from "react-select/creatable";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import addButton from "../../assets/icon/addIcon.png";
import './AddTaskButton.css'

function AddTaskButton({ newTask, Task }) {
  const [isModalView, setIsModalView] = useState(false);

  const [textSaved,setTextSaved]=useState('');

  const [projectSaved,setProjectSaved]=useState('');

  const [difficultySaved,setDifficultySaved]=useState('');

  const [openCalendar,setOpenCalendar]= useState(false);

  const [selectedDateCalendar, setSelectedDateCalendar]= useState('')

  const deleteModalData = ()=>{
    setTextSaved('')
    setProjectSaved('')
    setDifficultySaved('')
    setSelectedDateCalendar('')
  }

  useEffect(() => {
    if (selectedDateCalendar) {
      setOpenCalendar(false);
    }
  }, [selectedDateCalendar]);

  const tasksDificulty=[
    {
      value:'easy',
      label:'Easy',
    },
    {
      value:'medium',
      label:'Medium',
    },
    {
      value:'hard',
      label:'Hard',
    }
  ]

  const openModal = () => {
    setIsModalView(!isModalView);
  };

  const handleCalendar = ()=>{
    setOpenCalendar(!openCalendar)
    console.log(openCalendar)
  }

  const singleProjectSave = [...new Set(Task.map(p=>p.project))].map(project=>({
    value:project,
    label:project,
  }) )
  

  const projectValueSelected =projectSaved?.value || '';

  

  const difficultyValueSelected =difficultySaved.value

  console.log(difficultyValueSelected)


  return (
    <>
      <button className="dark:bg-[#53c1e2] phone: bg-[#B5E9FF] p-2 mr-2 rounded-4xl cursor-pointer " onClick={()=>{openModal(),setTextSaved('')}}>
        <img src={addButton} alt="" />
      </button>

      {isModalView ?(
        <div onClick={openModal} className="absolute z-100 inset-0 bg-black/50"></div>
      ):null}

      {isModalView ? (
       
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center bg-white z-101 dark:text-[#bebebe] dark:bg-[#333333] overflow-auto phone: w-80 h-150  ">

          <h1 className="mb-6 font-bold phone:text-2xl">Add ToDo</h1>
          

          <div>
            <h3 className="mb-2">Add a Description</h3>
            <input className="text-center mb-5 border dark:text-[#9A9EA1] phone: w-70 h-20 focus: outline-blue-500 " type="text" placeholder="Enter a New Task" onChange={e=>setTextSaved(e.target.value)} />
          </div>

          <div>
            <h3 className="mb-2">Add/Select a Project</h3>
            <Select

            
              className="mb-3 dark:text-[#000000] " 
              name="" 
              options={singleProjectSave} 
              value={projectSaved}
              onChange={setProjectSaved}
              id="">
            </Select>

          </div>
          
          <div>
            <h3 className="mb-2">Add a Date</h3>
            <button className="rounded-full bg-blue-300 p-2 mb-3 hover:bg-blue-400 dark:bg-blue-500 dark:text-white cursor-pointer
             " onClick={()=>handleCalendar()}>Click Here</button>
            {openCalendar ? (
              <DayPicker
              animate
              mode="single"
              selected={selectedDateCalendar}
              onSelect={setSelectedDateCalendar}
            />
            ): null}
            {selectedDateCalendar ? <h3 className="mb-3">Selected Date: {selectedDateCalendar.toLocaleDateString('ja-JP')}</h3> : null}
          </div>

          <div>
            <h2 className="mb-3">Add a Difficulty</h2>
            <Select 
              className="mb-3 dark:text-[#000000]"
              name="" 
              value={difficultySaved}
              options={tasksDificulty} 
              onChange={setDifficultySaved}
              id="">
            </Select>
          </div>
          
          { textSaved.trim() ==='' || difficultyValueSelected === undefined || selectedDateCalendar === undefined ? (
              <h2 className="text-red-500 font-bold mb-3">No dejes espacios vacios</h2>
            ): null}
          
          
          <div className="flex gap-10">
          <button className="rounded-full bg-red-400 w-20 h-10 mb-3 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark: text-white cursor-pointer" onClick={()=>{openModal(), deleteModalData()}}>Cancel</button>

          <button className="rounded-full bg-green-400 w-20 h-10 mb-3 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-greem-600 dark:text-white cursor-pointer" onClick={()=>{
            
            if(textSaved.trim() ==='' || difficultyValueSelected === undefined || selectedDateCalendar === undefined )return;
            newTask((previousContent)=> [...previousContent,{ id:previousContent.length+1, taskDescription:textSaved, date:selectedDateCalendar?.toLocaleDateString('ja-JP'),project:projectValueSelected,difficult:difficultyValueSelected,favorite:false,completed:false}]);
            setIsModalView(false);
            deleteModalData()
          }}>Accept</button>

          </div>
          
        
       </div>
      ) : null}
      
    </>
  );
}

export default AddTaskButton;
