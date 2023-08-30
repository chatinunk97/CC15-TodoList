import ListItem from "./ListItem";

/*
props = {
    lists : Array <{
        id:number,
        text:string,
        icon:<Component/>,
        active:true
    }>
    ]
}
*/
const Lists = (props)=>{
    console.log(props)
    return(
        <>
            {props.data.map((obj)=>{
                return(
                    <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />
                )
            })}
        </>
    )
}

export default Lists;