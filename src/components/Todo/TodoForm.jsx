import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";

function TodoForm(props) {

  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState(props.oldTodo?.task || '');

  const handleChangeInput = (event) => {
    if (isError) setIsError(false);
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validation
    if (taskInput.trim() === "") {
      setIsError(true);
      return;
    }

    //Send taskInput to addTodo in App jsx//

    ///IF there's a props.addTodo prop do the following
    if(props.addTodo) props.addTodo(taskInput);
    else if(props.editTodo) {
      props.editTodo(props.oldTodo.id,{task : taskInput})
    }
    props.setIsOpenForm(false);
  };

  const handleCancel = () => {
    props.setIsOpenForm(false);
  };


  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        onChange={handleChangeInput}
        className={styles.todo__form__input}
        placeholder={`${props.task ? "":"Task Name"}`}
        value={taskInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : (
          <></>
        )}

        <div className={styles.todo__form__buttons}>
          <Button
            type="button"
            text="Cancel"
            active={false}
            onClick={handleCancel}
          />
          <Button type="submit" text={props.textSubmit} active={true} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
