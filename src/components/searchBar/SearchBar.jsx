import { useState } from "react";
import "./searchBar.scss";


const types = ["Rent","Buy"];


export default function SearchBar(){
const [query,setQuery]=useState({
    type: types[0],
    location: "",
    minPrice: 0,
    maxPrice: 0,
});
const switchType=(val)=>{
     setQuery((p)=>({...p, type:val}));
 };
    return (
    <div className="searchBar">
        <div>

        <div className="type">
        {types.map((type,i)=>
        
        <button onClick={()=>switchType(type)}  key={i} className={query.type === type ? "active" : null}>{type}</button>
    )}
    </div>
        </div>
        <div>

        <form action="">
            <input type="text" name="location" placeholder="Location" />
            <input type="number" name="minPrice" placeholder="Min Price" min={0} max={10000000}/>
            <input type="number" name="maxPrice" placeholder="Max Price" min={0} max={10000000}/>
            <button>
                <img src="../../public/search.png" alt="" />
            </button>
        </form>
        </div>
    </div>
);
}
