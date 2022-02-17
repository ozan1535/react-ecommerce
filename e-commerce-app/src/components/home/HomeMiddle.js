import { Link } from "react-router-dom";
import "../../styles/home/homeMiddle.css"
const HomeMiddle = () => {
    return ( 
        <div className="homeMiddle">
                <div className="portrait">
                    <p>Cool Sweatshirts</p>
                    <img src="./images/man-portrait.jfif" alt="" />
                    <Link to="/men">Shop Now!</Link>
                </div>
                <div className="portrait">
                    <p>Dresses for you</p>
                    <img src="./images/women-portrait.jfif" alt="" />
                    <Link to="/women">Shop Now!</Link>
                </div>
                <div className="portrait">
                    <p>Kids Collection</p>
                    <img src="./images/kids-portrait.jfif" alt="" />
                    <Link to="/kids">Shop Now!</Link>
                </div>
        </div>
     );
}
 
export default HomeMiddle;