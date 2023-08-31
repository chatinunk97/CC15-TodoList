import styles from './TodoForm.module.scss';

function TodoForm(props) {
  return (
    <form className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>Title is required</p>
        <div className={styles.todo__form__buttons}>
          <button onClick={props.event}>Cancel</button>
          <button>Add Task</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
