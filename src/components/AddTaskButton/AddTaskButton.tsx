import { useState } from "react";
import addButton from "../../assets/icon/addIcon.png";
import './AddTaskButton.css'

function AddTaskButton({ newTask }) {
  const [isModalView, setIsModalView] = useState(false);

  const [textSaved,setTextSaved]=useState('');

  const openModal = () => {
    setIsModalView(!isModalView);
  };

  return (
    <>
      <button className="phone:absolute bottom-40 right-4 z-100 bg-[#B5E9FF] p-5 rounded-4xl " onClick={()=>{openModal(),setTextSaved('')}}>
        <img src={addButton} alt="" />
      </button>

      {isModalView ?(
        <div onClick={openModal} className="boxShadow"></div>
      ):null}

      {isModalView ? (
       
        
         <div className="modalNewTask">

          <h1 className="titleModal">Add ToDo</h1>
          <input className="inputModal" type="text" placeholder="Enter a New Task" onChange={e=>setTextSaved(e.target.value)} />
          
          <div className="buttonContainer">
          <button className="buttonDelete" onClick={()=>{openModal(),setTextSaved('')}}>Cancel</button>

          <button className="buttonCheck" onClick={()=>{
            if(textSaved.trim() ==='')return;
            newTask((previousContent)=> [...previousContent,{ id:previousContent.lenght+1, taskDescription:textSaved}]);
            setIsModalView(false);
          }}>Accept</button>

          </div>
          
        
       </div>
      ) : null}
      
    </>
  );
}

export default AddTaskButton;
