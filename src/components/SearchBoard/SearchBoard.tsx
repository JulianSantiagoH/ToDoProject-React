import searchButton from "../../assets/icon/SearchIcon.png";
import './SearchBoard.css'

function SearchBoard({newSearchFilter}) {
  return (
    <div className="flex items-center mt-3 border-1 rounded-2xl dark:bg-white phone: w-50 mb-2.5">
      <img className="phone:w-4.5 h-4.5 ml-2" src={searchButton} alt="Search Icon" title="Search Icon" />
      <input className="dark: outline-none phone:ml-2 h-12 w-full" type="text" onChange={e => newSearchFilter(e.target.value)}></input>
    </div>
  );
}

export default SearchBoard;
