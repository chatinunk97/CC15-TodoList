import ListItem from "./ListItem";
import './Lists.module.scss'
function Lists(props) {

  return (
    <ul className="list">
      {props.data.map((obj) => (
        <ListItem
          key={obj.id}
          id={obj.id}
          text={obj.text}
          icon={obj.icon}
          active={obj.active}
		  onClick = {props.setList}
		  list = {props.data}
        />
      ))}
    </ul>
  );
}

export default Lists;
