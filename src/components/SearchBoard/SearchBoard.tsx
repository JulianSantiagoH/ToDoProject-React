import searchButton from "../../assets/icon/SearchIcon.png";

function SearchBoard({newSearchFilter}) {
  return (
    <>
      <img src={searchButton} alt="Search Icon" title="Search Icon"/>
      <input type="text" placeholder="Search your Task" onChange={e => newSearchFilter(e.target.value)}></input>
    </>
  );
}

export default SearchBoard;
