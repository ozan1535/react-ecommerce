import { Link } from "react-router-dom";
import "../../styles/home/homeTop.css"

const HomeTop = () => {
    return ( 
        <div className="homeTop">
            <h1>You Deserve All The Best Clothes!</h1>
            <p>This is an example E-Commerce website. I created this project to develop my React.js skills. Hope you will enjoy scrolling.</p>
            <Link>Shop Now!</Link>
        </div>
    );
}
 
export default HomeTop;