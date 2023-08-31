import styles from "./ListItem.module.scss";


function ListItem(props) {
  const listClassName = `${styles.list__item} ${
    props.active ? styles.list__item__active : ""
  }`;
  const handleClick = () => {
    //Reset every other Obj active and also cloning the List
    const newList = props.list.map((item) => { item.active = false;
      return item;
    });
    //Find the current Component index by using ID
    const foundIndex = newList.findIndex((item) => {
      return item.id == props.id;
    });
    // Changed the the found component's active to true
    newList[foundIndex].active = true;

    //Update the list using setState function
    // Note that we have to have a new List to update 
    // Editing the old one won't do it cuz it's the same
    props.onClick(newList);
  
  };

  return (
    <li className={listClassName} onClick={handleClick}>
      {props.icon}
      <p className={styles.list__item__text}>{props.text}</p>
    </li>
  );
}

export default ListItem;
