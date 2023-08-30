import "./App.scss";
import Header from  "../components/Header"
import List from "../components/List"

import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const generalLists = [
  {id : 1, text : 'Inbox' , icon : <FaInbox/>, active : true ,},
  {id : 2, text : 'Today', icon : <FaCalendar/>, active : false ,},
  {id :3 , text : 'Next 7 Days', icon :<FaCalendarAlt/> , active : true ,},
]
const projectLists = [
  {id : 3, text : 'Projects' , icon : <FaChevronDown/>, active : true ,},
  {id : 4, text : 'Work', icon : <FaInbox/>, active : false ,},
  {id : 5, text : 'Home', icon : <FaInbox/>, active : false ,},

]

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header/>
      </div>
      <div className="todo__sidebar">
        <asid>
        <section className='sidebar__category'>
        <List data={generalLists}/>
        </section>
        <section className='sidebar__category'>
        <ol>
          {/* {projectLists.map((obj)=>(<ListItem {...obj} />))} */}
        </ol>
        </section>
        </asid>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
