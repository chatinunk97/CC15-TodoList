import './ListItem.scss'
const ListItem = (props) => {

  return (
    <li className={`generalSide__button  ${props.active ? "active":""}`}>
      <div className="generalSide__logo">
       {props.icon}
      </div>
      <p>{props.text}</p>
    </li>
  );
};

export default ListItem;
