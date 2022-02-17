import "../../styles/header/headerLeft.css";
import { Link } from "react-router-dom";


const HeaderLeft = () => {
    return ( 
        <div className="headerLeft">
            <div className="headerLogo">
                <Link to="/">CheapBoutique</Link>
            </div>
            <div className="headerMenu">
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
            </div>
        </div>
     );
}
 
export default HeaderLeft;