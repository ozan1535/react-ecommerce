import "../../styles/header/headerMiddle.css";
import { Link } from "react-router-dom";

const HeaderMiddle = ({setProductSearch}) => {

    let addSearch = () => {
        //setProductSearch()
        let searchValue = document.getElementById("searchValue").value;

        if(searchValue.length  < 1){
            alert("Hey please write something to search");
            window.open(window.location.href, "_self");
        }
        else {
        setProductSearch(searchValue);
        }
    }

    return ( 
        <div className="headerMiddle">
            <div className="input">
                <input type="text" placeholder="Type the product, category or brand you are looking " id="searchValue" />
                <Link to="/search"><i className="fas fa-search" onClick={() => addSearch()}></i></Link>
            </div>
        </div>
     );
}
 
export default HeaderMiddle;