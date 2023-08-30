import "./App.scss";
import Header from "../components/Header";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoList from "../components/Todo/TodoList";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  const generalLists = [
    { id: 1, text: "Inbox", active: true, icon: <FaInbox /> },
    { id: 2, text: "Today", active: false, icon: <FaCalendar /> },
    { id: 3, text: "Next 7 Days", active: false, icon: <FaCalendarAlt /> },
  ];

  const projectLists = [
    { id: 1, text: "Project-A", active: false, icon: <FaInbox /> },
    { id: 2, text: "Project-B", active: true, icon: <FaInbox /> },
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category"></section>
          <ul className="list">{<Lists data={generalLists} />}</ul>
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
              {<Lists data={projectLists} />}
            </ul>
          </div>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          {/* Header */}
          <TodoHeader />
          {/* Create Todo */}
          <TodoCreate/>
          {/* TodoLists */}
          <TodoList/>
        </main>
      </div>
    </div>
  );
}

export default App;
