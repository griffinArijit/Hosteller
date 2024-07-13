import "./homepage.scss"
import SearchBar from "../../components/searchBar/SearchBar"
export default function Homepage(){

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">
                    Find affordabal hostel & Travel comfortablely
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore dignissimos nam, atque repellat recusandae, vero voluptatibus 
                    corporis ad distinctio tempore odio dolores incidunt quia reiciendis aperiam aliquam eaque in laborum!
                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200+</h1>
                        <h2>Traveller</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Active Hostels</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="../../../public/bg.png" alt="" />
            </div>
        </div>
    )
}