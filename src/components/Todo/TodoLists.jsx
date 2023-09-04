import styles from "./TodoLists.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import React from "react";
import TodoForm from "./TodoForm";

function TodoLists() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleCLick = () => {
    console.log("Clicked");
    console.log(isFormOpen);
    setIsFormOpen(!isFormOpen);
  };
  console.log("====>", isFormOpen);
  return (
    <>
      {isFormOpen ? (
        <TodoForm onClick = {handleCLick} />
      ) : (
        <ul className={styles.todo__lists}>
          <li className={styles.todo}>
            <div className={styles.todo__checkbox}>
              <HiOutlineCheck className={styles.todo__checkbox__icon} />
            </div>
            <p className={styles.todo__task}>todo-item 1 </p>
            <span className={styles.todo__date}>30 Aug</span>
            <div className={styles.todo__action}>
              <span>
                <FaPen className={styles.todo__edit} onClick={handleCLick} />
              </span>
              <span>
                <FaTrashAlt className={styles.todo__delete} />
              </span>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default TodoLists;
