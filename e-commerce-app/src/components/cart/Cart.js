import YourCartLeft from "./YourCartLeft";
import YourCartRight from "./YourCartRight";
import "../../styles/cart/cart.css";
import "../../styles/cart/yourCartLeft.css";
import "../../styles/cart/yourCartRight.css";
import { useEffect, useState } from "react";

const Cart = ({productInformation, setProductInformation, totalPrice,setTotalPrice}) => {

    //const [totalPrice, setTotalPrice] = useState(0);
    // useEffect(() => {
    //     productInformation.forEach((product) => {
    //         setTotalPrice((a) => a + product[1]);
    //     })
    // }, [])


    return ( 
        <div className="yourCart">
            <div className="yourCartContainer">
                <YourCartLeft  setTotalPrice={setTotalPrice} productInformation={productInformation} setProductInformation={setProductInformation}/>
                <YourCartRight totalPrice={totalPrice} />
            </div>
        </div>
    );
}
 
export default Cart;