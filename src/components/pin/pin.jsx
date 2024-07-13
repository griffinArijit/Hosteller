import "./pin.scss"
import { Marker,Popup } from "react-leaflet";
import { Link } from "react-router-dom";
export default function Pin({items}){
    return (
    <Marker position={[items.latitude,items.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={items.images} alt="" />
            <div className="textContainer">
                <Link to={`/${items.id}`}>{items.title}</Link>
                <span className="bed">{items.bedroom} bedroom</span>
                <b>${items.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
    );
}