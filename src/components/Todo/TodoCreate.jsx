import styles from "./TodoCreate.module.scss";
import TodoForm from "./TodoForm";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

function TodoCreate(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = (event) => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Add Task" 
        setIsOpenForm = {setIsOpenForm} addTodo={props.addTodo}/>
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
