import { useState } from "react";

function FilterBoard({ dateData, dataSelected }) {
  const [modalDates,setModalDates]= useState(false)
  const [selectedDate,setSelectedDate]= useState('')

  const handleSelected = (value)=>{
    dataSelected(value)
  }

  const handleModalView=()=>{
    setModalDates(!modalDates)
  }
  // console.log(dateData);
  return (
    <>
      {selectedDate ? (
        <button onClick={handleModalView}>{selectedDate}</button>
      ):(
        <button onClick={handleModalView}>All</button>
      )}
      <button>Projects</button>
      <button>Favorite</button>

      {modalDates ? (
        dateData.map((item) => {
          return (
            <ul key={item}>
              <button onClick={()=>{
                setSelectedDate(item);
                handleSelected(item);
              }}><li>{item}</li></button>
              
            </ul>
          );
        })
      ): (
        null
      )}
    </>
  );
}

export default FilterBoard;
