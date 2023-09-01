import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";
import { nanoid } from "nanoid";


function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const handleChangeInput = (event) => {
    if (isError) setIsError(false);
    // if(event.target.value) setIsError(false)
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskInput.trim() === "") {
      setIsError(true);
      console.log("ERROR");
      return;
    }
    console.log("Submit === Create new Todo");
    //1 -> Request to DB to save the data
    //2 -> Update Todo state ===> React Rerenders
    const newTodo = {
      id: nanoid(),
      task: taskInput,
      status: false,
      due_date: "2023-09-01",
    };
    props.setTodo((prevState)=>{return [newTodo,...prevState]});
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
        placeholder="Task Name"
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
