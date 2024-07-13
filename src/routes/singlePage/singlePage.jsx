import Slider from "../../components/slider/slider"
import "./singlePage.scss"
import { singlePostData, userData } from "../../lib/dummyData"
import Map from "../../components/map/map"

export default function SinglePage(){
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                <Slider images={singlePostData.images}/>
                <div className="info">
                <div className="top">
                <div className="post">
                    <h1>{singlePostData.title}</h1>
                    <div className="address">
                        <img src="../../../public/pin.png" alt="" />
                        <span>{singlePostData.address}</span>
                    </div>
                    <div className="price">$ {singlePostData.price}</div>
                </div>
                    <div className="user">
                        <img src={userData.img} alt="" />
                        <span>{userData.name}</span>
                    </div>
                
                </div>
                <div className="bottom">
                    {singlePostData.description}
                </div>
                </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="../../../public/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pet Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/fee.png" alt="" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                    <div className="size">
                        <img src="../../../public/size.png" alt="" />
                        <span>80 sqft</span>
                    </div>
                    <div className="size">
                        <img src="../../../public/bed.png" alt="" />
                        <span>2 Beds</span>
                    </div>
                    <div className="size">
                        <img src="../../../public/bath.png" alt="" />
                        <span>1 Bathroom</span>
                    </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                    <div className="feature">
                            <img src="../../../public/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>250 m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/bus.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/restaurant.png" alt="" />
                            <div className="featureText">
                                <span>Resturant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="../../../public/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="../../../public/save.png" alt="" />
                            Save a Place
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}