import { useState } from "react";
import calendarIcon from "../../assets/icon/calendarIcon.png";
import favoriteIcon from "../../assets/icon/favoriteIcon2.png";
import projectIcon from "../../assets/icon/projectIcon.png";

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
      <div className="phone:fixed h-15 bottom-0 left-0 w-full flex justify-around inset-shadow-2xs inset-shadow-black/25 bg-white ">
        {selectedDate ? (
          <button onClick={handleModalView}>
            <span className="inline phone:hidden">{selectedDate}</span>
            <span className="hidden phone:inline">
              <img src={calendarIcon} alt="dateFilter" />
            </span>
          </button>
        ) : (
          <button onClick={handleModalView}>
            <span className="inline phone:hidden">All</span>
            <span className="hidden phone:inline">
              <img src={calendarIcon} alt="dateFilter" />
            </span>
          </button>
        )}
        <button onClick={() => handleProjects()}>
          <span className="inline phone:hidden">Projects</span>
          <span className="hidden phone:inline">
            <img src={projectIcon} alt="dateFilter" />
          </span>
        </button>
        <button onClick={() => handleFavorite()}>
          <span className="inline phone:hidden">Favorite</span>
          <span className="hidden phone:inline">
            <img className="phone:w-7.5" src={favoriteIcon} alt="dateFilter" />
          </span>
        </button>
      </div>

      {modalDates ? (
        <div className="phone:absolute z-99 flex flex-col items-center bottom-15 left-4 border-1 w-30 h-50 overflow-y-auto border-[#D5D5D5] bg-white">
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
