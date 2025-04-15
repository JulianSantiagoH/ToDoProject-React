import { useState } from "react";

import CalendarIcon from "../../assets/icon/Calendar.Icon";
import ProjectIcon from "../../assets/icon/project.icon"
import FavoriteSectionIcon from "../../assets/icon/FavoriteSection.icon";

function FilterBoard({
  dateData,
  dataSelected,
  setDataFavorite,
  dataFavorite,
  setDataProject,
}) {
  const [modalDates, setModalDates] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSelected = (value) => {
    dataSelected(value);
  };

  const handleModalView = () => {
    setModalDates(!modalDates);
  };

  const handleFavorite = () => {
    setDataFavorite(true);
    setDataProject(false);
  };

  const handleProjects = () => {
    setDataProject(true);
    setDataFavorite(false);
  };
  


  return (
    <> 
      {modalDates? <div onClick={()=>handleModalView()} className="absolute z-90 bg-white/0 w-full h-full top-0"></div>:null}
      <div className="dark:bg-[#121212] phone:absolute z-89 h-15 bottom-0 left-0 w-full flex justify-around inset-shadow-2xs inset-shadow-black/25 bg-white ">
        {selectedDate ? (
          <button onClick={handleModalView} className="cursor-pointer">
              <CalendarIcon className="text-black dark:text-white" />
          </button>
        ) : (
          <button onClick={handleModalView} className="cursor-pointer">
              <CalendarIcon className="text-black dark:text-white"/>
          </button>
        )}
        <button onClick={() => handleProjects()} className="cursor-pointer">
            <ProjectIcon className="text-black dark:text-white" />
        </button>
        <button onClick={() => handleFavorite()} className="cursor-pointer">
            <FavoriteSectionIcon className="text-black dark:text-white" />
        </button>
      </div>
      
      
      {modalDates ? (
        <div className=" computer:w-50 computer:h-70 computer:left-1/9 phone:absolute z-99 flex flex-col items-center bottom-15 left-1/15 border-1 w-40 h-50 overflow-y-auto border-[#D5D5D5] bg-white dark:bg-[#1e1e1e] dark:text-[#e0e0e0] cursor-pointer ">
          <button
            className="phone:mt-2.5 focus:font-bold mb-1"
            onClick={() => {
              dataSelected(null);
              setDataFavorite(false);
              setDataProject(false);
              setSelectedDate("");
            }}>
            All
          </button>
          {dateData.map((item) => {
            return (
              <ul key={item}>
                <button
                  className="focus:font-bold mb-1"
                  onClick={() => {
                    setSelectedDate(item);
                    handleSelected(item);
                    setDataFavorite(false);
                    setDataProject(false);
                  }}
                >
                  <li>{item}</li>
                </button>
              </ul>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default FilterBoard;
