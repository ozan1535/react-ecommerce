import { useHistory } from "react-router-dom";
import "../../styles/checkout/checkoutPayment.css"

const CheckoutPayment = () => {


    let history = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        history.push("/");
    };

    return ( 
        <div className="checkoutPayment">
            <div className="checkoutPaymentTop">
                <p>Checkout</p>
                <div>
                    <span>Address </span>
                    <span className="textLine"></span>
                    <span> Shipping </span>
                    <span className="textLine"></span>
                    <span className="textBold"> Payment</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="checkoutPaymentMiddle">
                    <div className="paymentPhotos">
                        <div className="paymentPhotosImages">
                            <div className="paymentPhotosImg">
                                <img src="./images/paypal.png" alt="" />
                            </div>
                            <div className="paymentPhotosImg">
                                <img src="./images/apple-pay.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="paymentDetails">
                        <p>Payment Details</p>
                        <div className="paymentCardInfo">
                            <input type="text" placeholder="Cardholder Name" required/>
                            <input type="text" placeholder="Card Number" required/>
                            <div className="paymentCardDates">
                                <input type="text" placeholder="Month" required/>
                                <input type="text" placeholder="Year" required/>
                                <input type="text" placeholder="CVC" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkoutPaymentBottom">
                   <button type="submit">Continue to Payment</button>
                </div>
            </form>
        </div>
     );
}
 
export default CheckoutPayment;