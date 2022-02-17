import "../../styles/home/homeBottom.css";
import { Link } from "react-router-dom";

const HomeBottom = () => {


    return ( 
        <div className="homeBottom">
            <div className="homePhotos women">
                <Link to="/women">
                    <img src="./images/women-clothing.jfif" alt="" />
                    <p>Women Clothing</p>
                </Link>
            </div>

            <div className="homePhotos homeMen">
                <Link to="/men">
                    <img src="./images/men-clothing.jfif" alt="" />
                    <p>Men Clothing</p>
                </Link>
            </div>

            <div className="homePhotos kids">
                <Link to="/kids">
                    <img src="./images/kids-clothing.jfif" alt="" />
                    <p>Kids Clothing</p>
                </Link>
            </div>
        </div>
     );
}
 
export default HomeBottom;