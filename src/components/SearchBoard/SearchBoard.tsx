import searchButton from "../../assets/icon/SearchIcon.png";
import './SearchBoard.css'

function SearchBoard({newSearchFilter}) {
  return (
    <div className="containerSearch">
      <img className="searchIcon" src={searchButton} alt="Search Icon" title="Search Icon"/>
      <input className="searchInput" type="text" placeholder="Search your Task" onChange={e => newSearchFilter(e.target.value)}></input>
    </div>
  );
}

export default SearchBoard;
