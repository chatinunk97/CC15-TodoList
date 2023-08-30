import ListItem from "./ListItem"

const List = (prop)=>{

    return(
        <ul>
          {prop.data.map((obj)=>(<ListItem {...obj} />))}
        </ul>
    )
}

export default List;