import styles from "./TodoItem.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoItem({ id, task, status, due_date, deleteTodo }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = (event) => {
    setIsOpenForm(!isOpenForm);
    // console.log(task);
  };
  const dateObject = new Date(due_date);
  const options = { day: "numeric", weekday: "short", month: "short" };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit" setIsOpenForm={setIsOpenForm} task = {task}/>
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox} ${
              status ? styles.todo__checkbox__done : ""
            } `}
          >
            <HiOutlineCheck className={styles.todo__checkbox__icon} />
          </div>
          <p
            className={`${styles.todo__task} ${
              status ? styles.todo__task__done : ""
            }`}
          >
            {task}
          </p>
          <span className={styles.todo__date}>
            {dateObject.toLocaleDateString("en-US", options)}
          </span>
          <div className={styles.todo__action}>
            <span>
              <FaPen className={styles.todo__edit} onClick={handleClick} />
            </span>
            <span>
              <FaTrashAlt
                className={styles.todo__delete}
                onClick={handleDelete}
              />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
