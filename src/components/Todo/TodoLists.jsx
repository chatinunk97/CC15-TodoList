import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";
const data = [
  {
    id: 1,
    task: "Suspendisse potenti.",
    status: true,
    due_date: "2023-04-26",
  },
  {
    id: 2,
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: 3,
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
]
function TodoLists() {

const [allTodos, setAllTodos] = useState(data)

  return (
    <ul className={styles.todo__lists}>
      {allTodos.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default TodoLists;
