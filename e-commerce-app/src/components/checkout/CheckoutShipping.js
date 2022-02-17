import "../../styles/checkout/checkoutShipping.css"

const CheckoutShipping = ({setComponent}) => {


    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        setComponent("CheckoutPayment");
    };

    return ( 
        <div className="checkoutShipping">
            <div className="checkoutShippingTop">
                <p>Checkout</p>
                <div>
                    <span>Address </span>
                    <span className="textLine"></span>
                    <span className="textBold"> Shipping </span>
                    <span className="textLine"></span>
                    <span> Payment</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="checkoutShippingMiddle">
                    <div className="checkoutShippingCheckbox">
                        <label htmlFor="checkbox1">
                            <input type="checkbox" name="" id="checkbox1" />
                            UPS/USPS Surepost 
                        </label>
                        <p>4-7 Business Days</p>
                    </div>
                    <div className="checkoutShippingCheckbox">
                        <label htmlFor="checkbox2">
                            <input type="checkbox" name="" id="checkbox2" />
                            UPS/USPS Surepost 
                        </label>
                        <p>4-7 Business Days</p>
                    </div>
                </div>
                <div className="checkoutShippingBottom">
                   <button type="submit">Continue to Payment</button>
                </div>
            </form>
        </div>
     );
}
 
export default CheckoutShipping;