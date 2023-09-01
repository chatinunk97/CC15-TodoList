import styles from './ListItem.module.scss';
import { FaInbox } from 'react-icons/fa';


function ListItem(props) {
  const listClassName = `${styles.list__item} ${props.active ? 'active' : ''}`;

  return (
    <li className={listClassName}>
      {props.icon}
      <p className={styles.list__item__text}>{props.text}</p>
    </li>
  );
}

export default ListItem;
