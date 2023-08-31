import "./Sidebar.scss";
import List from "./List";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: true },
  ];
  const projectLists = [
    { id: 3, text: "Projects", icon: <FaChevronDown />, active: true },
    { id: 4, text: "Work", icon: <FaInbox />, active: false },
    { id: 5, text: "Home", icon: <FaInbox />, active: false },
  ];

  return (
    <div className="sidebar">
      <aside>
        <section className="sidebar__category">
          <List data={generalLists} />
        </section>
        <section className="sidebar__category">
          <List data={projectLists} />
        </section>
      </aside>
    </div>
  );
};

export default Sidebar;
