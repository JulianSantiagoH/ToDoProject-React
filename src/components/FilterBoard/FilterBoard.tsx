import { useState } from "react";

function FilterBoard({ dateData, dataSelected, setDataFavorite, dataFavorite }) {
  const [modalDates,setModalDates]= useState(false)
  const [selectedDate,setSelectedDate]= useState('')

  const handleSelected = (value)=>{
    dataSelected(value)
  }

  const handleModalView=()=>{
    setModalDates(!modalDates)
  }

  const handleFavorite=()=>{
    setDataFavorite(true)
  }

  console.log(dataFavorite)
 
  return (
    <>
      {selectedDate ? (
        <button onClick={handleModalView}>{selectedDate}</button>
      ):(
        <button onClick={handleModalView}>All</button>
      )}
      <button>Projects</button>
      <button onClick={()=>handleFavorite()}>Favorite</button>

      {modalDates ? (
        <div>
          <button onClick={()=>{
            dataSelected(null);
            setDataFavorite(false);
            setSelectedDate('')
          }}>All</button>
          {dateData.map((item) => {
          return (
            <ul key={item}>
              <button onClick={()=>{
                setSelectedDate(item);
                handleSelected(item);
                setDataFavorite(false);
              }}><li>{item}</li></button>
              
            </ul>
          );
        })}
        </div>
        
      ): (
        null
      )}
    </>
  );
}

export default FilterBoard;
