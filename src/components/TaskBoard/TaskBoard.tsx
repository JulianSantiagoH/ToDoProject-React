import "./TaskBoard.css";
import checkIcon from "../../assets/icon/checkIcon.svg";
import deleteIcon from "../../assets/icon/deleteIcon.svg";

function TaskBoard({ taskData }) {
  return (
    <div className="containerTask">
      {Object.values(
        taskData.map((item) => {
          return (
            <div className="taskBody" key={item.id}>
              <button className="checkButton">
                <img src={checkIcon} alt="" />
              </button>
              <h1>{item.taskDescription}</h1>
              <button className="deleteButton">
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default TaskBoard;
