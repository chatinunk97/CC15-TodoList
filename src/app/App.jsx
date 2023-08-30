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
            <ListItem text="Inbox" icon={<FaInbox />} active={true} />
            <ListItem text="Today" icon={<FaCalendar />} active={false} />
            <ListItem
              text="Next 7 Days"
              icon={<FaCalendarAlt />}
              active={true}
            />
          </ul>

          <div className="accordion">
            {/* Toggle */}
            <div className="accordion__toggle">
              <li className="accordion__item">
                <FaChevronDown className="accordion__item__icon accordion__item__active" />
                <p className="accordion__item__text">Projects</p>
              </li>
            </div>

            {/* List */}
            <ul className="list">
              <section className="sidebar__category"></section>
              <ListItem text="Today" icon={<FaInbox />} active={false} />
              <ListItem text="Work" icon={<FaInbox />} active={true} />
            </ul>
          </div>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
