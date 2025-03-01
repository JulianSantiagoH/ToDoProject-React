import "./TaskBoard.css";
import checkIcon from "../../assets/icon/checkIcon.png";
import deleteIcon from "../../assets/icon/deleteIcon.png";
import favoriteIcon from "../../assets/icon/favoriteIcon.png";

function TaskBoard({ taskData, dateSelected, setTaskData }) {
  const testingGettingId = (id) => {
    setTaskData(
      taskData.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data
      )
    );
  };

  const favoriteModifier = (id) => {
    setTaskData(
      taskData.map((data) =>
        data.id === id
          ? { ...data, favorite: !data.favorite }
          : data
      )
    );
  };

  // const deleteTask = (id) => {
  //   setTaskData(
  //     taskData.map((data) =>
  //       data.id === id
  //         ? data.splice(index,id)
  //         : data
  //     )
  //   );
  // };

  return (
    <div className="containerTask">
      {dateSelected === null
        ? Object.values(
            taskData.map((item) => {
              return (
                <div className="taskBody" key={item.id}>
                  <button
                    className="checkButton"
                    onClick={() => {
                      testingGettingId(item.id);
                    }}
                  >
                    <img src={checkIcon} alt="Check Button" />
                  </button>
                  <h1>{item.taskDescription}</h1>
                  <button
                    className="favoriteButton"
                    onClick={() => favoriteModifier(item.id)}
                  >
                    <img src={favoriteIcon} alt="Favorite Button" />
                  </button>
                  <button className="deleteButton">
                    <img
                      className="iconButton"
                      src={deleteIcon}
                      alt="Delete Button"
                    />
                  </button>

                  {item.completed === true ? (
                    <h1>Completed</h1>
                  ) : (
                    <h1>In Process</h1>
                  )}

                  {item.favorite === true ? (
                    <h1>added to favorite</h1>
                  ) : (
                    <h1>add to favorite</h1>
                  )}
                </div>
              );
            })
          )
        : taskData
            .filter((date) => date.date === dateSelected)
            .map((item) => {
              return (
                <div className="taskBody" key={item.id}>
                  <button
                    className="checkButton"
                    onClick={() => {
                      testingGettingId(item.id);
                    }}
                  >
                    <img src={checkIcon} alt="Check Button" />
                  </button>
                  <h1>{item.taskDescription}</h1>
                  <button className="favoriteButton">
                    <img src={favoriteIcon} alt="Favorite Button" />
                  </button>
                  <button className="deleteButton">
                    <img
                      className="iconButton"
                      src={deleteIcon}
                      alt="Delete Button"
                    />
                  </button>
                </div>
              );
            })}
    </div>
  );
}

export default TaskBoard;
