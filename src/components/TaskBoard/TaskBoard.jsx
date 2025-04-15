import CheckIcon from "../../assets/icon/Check.Icon";
import FavoriteIcon from "../../assets/icon/Favorite.Icon";
import favoriteSelected from "../../assets/icon/favoriteIconSelected.png"
import DeleteIcon from "../../assets/icon/Delete.icon";
import { useState } from "react";

function TaskBoard({
  taskData,
  dateSelected,
  setTaskData,
  favoriteSection,
  dataProject,
  projectSection,
}) {
  const [projectSelected, setProjectSelected] = useState(null);

  const testingGettingId = (id) => {
    setTaskData((tasks)=>
      tasks.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data
      )
    );
  };

  const favoriteModifier = (id) => {
    setTaskData((tasks)=>
      tasks.map((data) =>
        data.id === id ? { ...data, favorite: !data.favorite } : data
      )
    );
  };

  const deleteTask = (id) => {
    setTaskData((tasks)=>tasks.filter((data) => data.id !== id));
  };

  const favoriteData = taskData.filter((item) => item.favorite);

  // console.log(projectSelected);

  // console.log(favoriteData);

  return (
    <div className="flex flex-col mt-5 max-h-160 ml-3.5 overflow-y-auto computer:max-w-200 computer:mr-auto computer:ml-auto computer:mt-10 computer:max-h-170">
      {favoriteSection === true ? (
        favoriteData.map((item) => {
          return (
            <div className={`phone:flex relative mb-5 p-2 ml-3.5 dark:bg-[#2c2c2c] dark:text-[#e0e0e0] items-center ${item.completed === true ? 'bg-green-300/50' : ''} ${item.difficult === 'easy'?'border-l-3 border-green-300':item.difficult === 'medium'?'border-l-3 border-yellow-300': item.difficult === 'hard'?'border-l-3 border-red-300':''}`} key={item.id}>
              <button
                className="phone:ml-5"
                onClick={() => {
                  testingGettingId(item.id);
                }}
              >
                <CheckIcon className={`border rounded-2xl dark:text-white ${item.completed === true ? 'bg-[#71dfff] dark:bg-[#14a0ca]': ''}`} />
              </button>

              <div className="phone:ml-4.5">
                <h1 className={`${item.completed === true ? 'line-through' : ''} phone:max-w-55 text-lg font-serif`}>{item.taskDescription}</h1>
                <h2 className="phone:max-w-55 text-xs font-serif text-[#9A9EA1]">{`${item.date} ${
                  item.project === null ? "" : `. ${item.project}`
                }`}</h2>
              </div>

              <div className="phone: flex absolute right-0 mr-8 z-1">
                <button className="phone:mr-4" onClick={() => favoriteModifier(item.id)}>
                    {item.favorite === true ? <img className="w-5" src={favoriteSelected} alt="favoriteSelected" /> : <FavoriteIcon />   }
                </button>
                <button
                  className="deleteButton"
                  onClick={() => deleteTask(item.id)}
                >
                  <DeleteIcon className="dark:text-white" />
                </button>
              </div>

              {/* {item.completed === true ? (
                    <h1>Completed</h1>
                  ) : (
                    <h1>In Process</h1>
                  )}

                  {item.favorite === true ? (
                    <h1>added to favorite</h1>
                  ) : (
                    <h1>add to favorite</h1>
                  )} */}
            </div>
          );
        })
      ) : dataProject === true ? (
        projectSelected !== null ? (
          <>
            <div className="flex justify-center">
              <button className="phone:flex bg-[#B5E9FF] w-20 h-9 items-center justify-center mb-6 rounded-2xl" onClick={() => setProjectSelected(null)}>Back</button>
            </div>

            {taskData
              .filter((data) => data.project === projectSelected)
              .map((item) => {
                return (
                  <div className={`phone:flex relative mb-5 p-2 ml-3.5 dark:bg-[#2c2c2c] dark:text-[#e0e0e0] items-center ${item.completed === true ? 'bg-green-300/50' : ''} ${item.difficult === 'easy'?'border-l-3 border-green-300':item.difficult === 'medium'?'border-l-3 border-yellow-300': item.difficult === 'hard'?'border-l-3 border-red-300':''}`} key={item.id}>
                    <button
                      className="phone:ml-5"
                      onClick={() => {
                        testingGettingId(item.id);
                      }}
                    >
                      <CheckIcon className={`border rounded-2xl dark:text-white ${item.completed === true ? 'bg-[#71dfff] dark:bg-[#14a0ca]': ''}`} />
                    </button>

                    <div className="phone:ml-4.5">
                      <h1 className={`${item.completed === true ? 'line-through' : ''} phone:max-w-55 text-lg font-serif`}>{item.taskDescription}</h1>
                      <h2 className="phone:max-w-55 text-xs font-serif text-[#9A9EA1]">{`${item.date} ${
                        item.project === null ? "" : `. ${item.project}`
                      }`}</h2>
                    </div>

                    <div className="phone: absolute right-0 mr-10 z-1">
                      <button className="phone:mr-4" onClick={() => favoriteModifier(item.id)}>
                        {item.favorite === true ? <img className="w-5" src={favoriteSelected}></img> : <FavoriteIcon />  } 
                      </button>
                      <button
                        className="deleteButton"
                        onClick={() => deleteTask(item.id)}
                      >
                      <DeleteIcon className="dark:text-white"  />
                      </button>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <div className="dark:text-white grid grid-cols-3 mt-9 place-items-center gap-y-10 computer:grid-cols-4" >
            {projectSection.map((item) => {
              if (item.project !== null) {
                return (
                  <div className="dark:bg-[#2c2c2c] flex flex-col justify-center items-center w-22 h-22 shadow-lg border-3 border-gray-50 computer:w-30 computer:h-30" key={item.id}>
                    <button
                      className="w-full h-full cursor-pointer font-serif truncate"
                      value={item.project}
                      onClick={(e) => setProjectSelected(e.target.value)}
                    >
                      {item.project? item.project : 'Without Project'}
                    </button>
                    <h2 className="font-serif text-xs mb-1">{`${item.count} ToDo`}</h2>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )
      ) : dateSelected === null ? (
        Object.values(
          taskData.map((item) => {
            return (
              <div className={`phone:flex relative mb-5 p-2 ml-3.5 dark:bg-[#2c2c2c] dark:text-[#e0e0e0] items-center ${item.completed === true ? 'bg-green-300/50' : ''} ${item.difficult === 'easy'?'border-l-3 border-green-300':item.difficult === 'medium'?'border-l-3 border-yellow-300': item.difficult === 'hard'?'border-l-3 border-red-300':''}`} key={item.id}>
                <button
                  className="phone:ml-5"
                  onClick={() => {
                    testingGettingId(item.id);
                  }}
                >
                  <CheckIcon className={`border rounded-2xl dark:text-white ${item.completed === true ? 'bg-[#71dfff] dark:bg-[#14a0ca]': ''}`} />
                </button>

                <div className="phone:ml-4.5">
                  <h1 className={`${item.completed === true ? 'line-through' : ''} phone:max-w-55 text-lg font-serif`}>{item.taskDescription}</h1>
                  <h2 className="phone:max-w-55 text-xs font-serif text-[#9A9EA1]">{`${item.date} ${
                    item.project === null ? "" : `. ${item.project}`
                  }`}</h2>
                </div>

                <div className="phone: flex absolute right-0 mr-10 z-1">
                  <button className="phone:mr-4" onClick={() => favoriteModifier(item.id)}>
                    {item.favorite === true ? <img className="w-5" src={favoriteSelected} alt="favoriteSelected" /> : <FavoriteIcon />   } 
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTask(item.id)}
                  >
                    <DeleteIcon className="dark:text-white"  />
                  </button>
                </div>
              </div>
            );
          })
        )
      ) : (
        taskData
          .filter((date) => date.date === dateSelected)
          .map((item) => {
            return (
              <div className={`phone:flex relative mb-5 p-2 ml-3.5 dark:bg-[#2c2c2c] dark:text-[#e0e0e0] items-center ${item.completed === true ? 'bg-green-300/50' : ''} ${item.difficult === 'easy'?'border-l-3 border-green-300':item.difficult === 'medium'?'border-l-3 border-yellow-300': item.difficult === 'hard'?'border-l-3 border-red-300':''}`} key={item.id}>
                <button
                  className="phone:ml-5"
                  onClick={() => {
                    testingGettingId(item.id);
                  }}
                >
                 <CheckIcon className={`border rounded-2xl dark:text-white ${item.completed === true ? 'bg-[#71dfff] dark:bg-[#14a0ca]': ''}`} />
                </button>

                <div className="phone:ml-4.5">
                  <h1 className={`${item.completed === true ? 'line-through' : ''} phone:max-w-55 text-lg font-serif`}>{item.taskDescription}</h1>
                  <h2 className="phone:max-w-55 text-xs font-serif text-[#9A9EA1]">{`${item.date} ${
                    item.project === null ? "" : `. ${item.project}`
                  }`}</h2>
                </div>

                <div className="phone: absolute right-0 mr-10 z-1">
                  <button className="phone:mr-4" onClick={() => favoriteModifier(item.id)}>
                    {item.favorite === true ? <img className="w-5" src={favoriteSelected} alt="favoriteSelected" /> : <FavoriteIcon />   }
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTask(item.id)}
                  >
                    <DeleteIcon className="dark:text-white"  />
                  </button>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default TaskBoard;
