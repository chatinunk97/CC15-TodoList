import styles from "./ListItem.module.scss";

function ListItem({ handleClickMenu, id , text , icon, active }) {
  const listClassName = `${styles.list__item} ${
    active ? styles.list__item__active : ""
  }`;
  const handleClick = () => {
    //Click and stay grey-dark
    handleClickMenu(id,{active : true});
  };

  return (
    <li className={listClassName} onClick={handleClick}>
      {icon}
      <p className={styles.list__item__text}>{text}</p>
    </li>
  );
}

export default ListItem;
