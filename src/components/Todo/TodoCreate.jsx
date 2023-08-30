import styles from "./TodoCreate.module.scss";

const TodoCreate = () => {
  return (
  <div className={styles.todo__create}>
    <span className={styles.todo__create__button}>+</span>
    <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>)
};

export default TodoCreate;
