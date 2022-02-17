import "../../styles/header/header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

const Header = ({setProductSearch, productInformation}) => {


    return ( 
        <div className="header">
            <div className="container">
                <HeaderLeft />
                <HeaderMiddle setProductSearch={setProductSearch} />
                <HeaderRight productInformation={productInformation} />
            </div>
        </div>
     );
}
 
export default Header;