import { Link } from "react-router-dom";

const YourCartRight = ({totalPrice}) => {


    return ( 
        <div className="yourCartRight">
            <div className="yourCartRightContainer">
                <p className="yourCartRightSummary">Order Summary</p>
                <input type="text" placeholder="Enter Coupon code here" />
                <div className="yourCartRightSubTotal">
                    <div>
                        <p>Subtotal</p>
                        <p>$<span>{totalPrice}</span></p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                </div>
                <div className="yourCartRightTotal">
                    <p>Total</p>
                    <p>$<span>{totalPrice}</span></p>
                </div>
                <Link to="/checkout">Continue to checkout</Link>
            </div>
        </div>
     );
}
 
export default YourCartRight;