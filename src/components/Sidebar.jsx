import "./Sidebar.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="generalSide">
        <ol>
          <li className="generalSide__button">
            <div className="generalSide__logo">
              <FaInbox />
            </div>
            Inbox
          </li>
          <li className="generalSide__button">
            <div className="generalSide__logo">
              <FaCalendar />
            </div>
            Today
          </li>
          <li className="generalSide__button">
            <div className="generalSide__logo">
              <FaCalendarAlt />
            </div>
            Next 7 Days
          </li>
        </ol>
      </div>
      <div className="projectSide">
        <ol>
          <li className="projectSide__title">
            <div className="projectSide__logo">
              <FaChevronDown />
            </div>
            Projects
          </li>
          <li className="projectSide__button">
            <div className="projectSide__logo">
              <FaInbox />
            </div>
            Work
          </li>
          <li className="projectSide__button">
            <div className="projectSide__logo">
              <FaInbox />
            </div>
            Home
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
