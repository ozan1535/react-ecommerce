import { useEffect, useState } from "react";
import "../../styles/buy/productBuy.css";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";


const ProductBuy = (productInfo) => {
    const { productInformation, setProductInformation } = productInfo;
    return ( 
        <div className="productBuy">
            <div className="productBuyContainer">
                <ProductLeft productInfo={productInfo.location.state} />
                <ProductRight productInfo={productInfo.location.state} productInformation={productInformation} setProductInformation={setProductInformation}/>
            </div>
        </div>
     );

}
 
export default ProductBuy;

//productInfo.location.state