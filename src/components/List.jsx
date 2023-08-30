import './List.scss'
const List = (props) => {

  return (
    <li className={`generalSide__button  ${props.active ? "active":""}`}>
      <div className="generalSide__logo">
       {props.icon}
      </div>
      <p>{props.text}</p>
    </li>
  );
};

export default List;
