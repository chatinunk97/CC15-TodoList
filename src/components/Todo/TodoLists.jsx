import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";

function TodoLists(props) {



  return (
    <ul className={styles.todo__lists}>
      {props.data.map((item) => {
        return <TodoItem key={item.id} id ={item.id} {...item} />;
      })}
    </ul>
  );
}

export default TodoLists;
