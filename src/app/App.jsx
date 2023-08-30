import "./App.scss";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category"></section>
          <ul className="list">
            <ListItem text="Inbox" icon={<FaInbox />} active = {true} />
            <ListItem text="Today" icon={<FaCalendar />} active = {false} />
            <ListItem text="Next 7 Days" icon={<FaCalendarAlt />} active = {true} />
          </ul>
          <ul className="list">
            <section className="sidebar__category">Project</section>
            <ListItem text="Today" icon={<FaInbox />} active = {false} />
            <ListItem text="Work" icon={<FaInbox />} active = {true} />
          </ul>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
