import styles from "./TodoItem.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoItem({ id ,  task, status, due_date }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  console.log(id)
  const handleClick = (event) => {
    setIsOpenForm(!isOpenForm);
  };
  const dateObject = new Date(due_date);
  const options = { day: "numeric", weekday: "short", month: "short" };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit" setIsOpenForm={setIsOpenForm} />
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
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
