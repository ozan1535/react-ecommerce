import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight";
import "../../styles/checkout/checkout.css"
import "../../styles/checkout/checkoutLeft.css"
import "../../styles/checkout/checkoutRight.css"


const Checkout = ({setTotalPrice, productInformation, setProductInformation}) => {



    return ( 
        <div className="checkout">
            <div className="checkoutContainer">
                <CheckoutLeft />
                <CheckoutRight setTotalPrice={setTotalPrice} productInformation={productInformation} setProductInformation={setProductInformation}/>
            </div>
        </div>
     );
}
 
export default Checkout;