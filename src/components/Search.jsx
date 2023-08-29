import {FaSearch} from "react-icons/fa";
import './Search.scss'
const Search = () => {
  return (
    <div className="search">
      <span className="search__icon">
        <FaSearch />
      </span>
      <input type="text" placeholder="search" className="search__input"></input>
    </div>
  );
};

export default Search;
