import ListItem from "./ListItem"

const List = (prop)=>{

    return(
        <ul className="list">

          {prop.data.map((obj)=>(<ListItem {...obj} />))}

          
        </ul>
    )
}

export default List;