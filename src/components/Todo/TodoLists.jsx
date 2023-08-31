import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoLists() {

const [List,setList] = useState([
  {id :1 , task :'Shopping' , done : true, date : 'N/A' ,},
  {id :2 , task : 'Homework', done :false , date :  'N/A' ,},
  {id :3 , task : 'Read comic' , done : true, date :  'N/A' ,},
])


  return (
    <ul className={styles.todo__lists}>
      {List.map((item)=>{return <TodoItem {...item}/>})}
      </ul>
  );
}

export default TodoLists;
