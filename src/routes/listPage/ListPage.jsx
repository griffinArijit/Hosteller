import { listData } from "../../lib/dummyData";
import "./listPage.scss"
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";

export default function ListPage(){
    const data =listData;
    return <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                 {data.map((item)=>(
                <Card key={item.id} item={item}/>))

                } 
            </div>
        </div>
        <div className="mapContainer">
           <div><Map items={data}/>
            </div>  
        </div>
    </div>

}