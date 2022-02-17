import "../../styles/header/headerRight.css";
import { Link } from "react-router-dom";

const HeaderRight = ({ productInformation }) => {

    return (
        <div className="headerRight">
            <Link to="/favourites" title="Favourites"><i className="fas fa-heart"></i></Link>
            <Link to="/cart" title="My Cart" className="countProduct"><i className="fas fa-shopping-bag"></i>
                {
                    productInformation.length > 0 ?
                        <span
                            style={{
                                position: "absolute",
                                fontSize: "13px",
                                fontWeight: "500",
                                textAlign: "center",
                                lineHeight: "20px",
                                width: "20px",
                                height: "20px",
                                top: "60%",
                                left: "60%",
                                backgroundColor: "rgb(132, 168, 117)",
                                borderRadius: "50%"
                            }}
                        >{productInformation.length}</span> : ""}</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default HeaderRight;