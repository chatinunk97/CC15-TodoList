import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";

function TodoLists(props) {


  return (
    <ul className={styles.todo__lists}>
      {props.data.map((item) => {
        return <TodoItem key={item.id} id ={item.id} deleteTodo={props.deleteTodo} {...item} />;
      })}
    </ul>
  );
}

export default TodoLists;
