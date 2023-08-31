import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";

function TodoForm(props) {
  const [isError, setIsError] = useState("true");
  console.log(isError);
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setIsError(false);
      return;
    }
    setIsError(true);
  };

  return (
    <form className={styles.todo__form__container}>
      {/*	Body */}
      <input
        onChange={handleChange}
        className={styles.todo__form__input}
        placeholder="Task Name"
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : (
          <></>
        )}

        <div className={styles.todo__form__buttons}>
          <Button text="Cancel" active={false} />
          <Button text={props.textSubmit} active={true} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
