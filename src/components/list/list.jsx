import "./list.scss"
import Card from "../card/card"
import { listData } from "../../lib/dummyData"

export default function List(){
    return(
        <div className="list">
            {listData.map((item)=>{
                //console.log(item);
                return <Card key={item.id} item={item}/>
            })}
        </div>
    )
}