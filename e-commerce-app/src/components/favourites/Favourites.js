import "../../styles/favourites/favourites.css";
import { Link } from "react-router-dom";

const Favourites = ({favProduct, favProductImages}) => {
    return ( 
        <div className="favourites">
            <p className="favouritesText">Your Favourites</p>
            {favProduct.length == 0 ? <p style={{backgroundColor: "rgb(132, 168, 117)", color: "white", 
                                                padding: "10px 20px", fontSize: "20px", borderRadius: "30px"}}>
                You do not currently have any favorite products.</p> : "" }
            
            
            <div className="favouriteItems">

            {

                favProduct.map((product, index) => (
                <div className="favouriteItemCard" key={index}>
                                  <Link to={{
                pathname: `/productBuy`,
                state: { product}
              }}>
                        <div className="favouriteItemCardimg">
                            <i className="fas fa-heart"></i>
                            <img src={favProductImages[index]} alt="" />
                        </div>
                        <div className="favouriteItemCardInfo">
                            <p className="favouriteItemProductInfo">
                                {product.productName}
                            </p>
                            <p className="favouriteItemProductPrice">
                            ${product.productPrice}
                            </p>
                        </div>
                        </Link>
                </div>
                ))
            }

            </div>
        </div>
     );
}
 
export default Favourites;