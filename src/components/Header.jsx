import { FaHome } from "react-icons/fa";
import "./Header.scss";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">
        <h3>Todoist</h3>
      </div>

      <div className="header__search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
