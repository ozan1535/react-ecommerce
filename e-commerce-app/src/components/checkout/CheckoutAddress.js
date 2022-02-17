import "../../styles/checkout/checkoutAddress.css"


const CheckoutAddress = ({setComponent}) => {

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        setComponent("CheckoutShipping");
    };

    return ( 
        <div className="checkoutAddress">
            <div className="checkoutAddressTop">
                <p>Checkout</p>
                <div>
                    <span className="textBold">Address </span>
                    <span className="textLine"></span>
                    <span> Shipping </span>
                    <span className="textLine"></span>
                    <span> Payment</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="checkoutAddressMiddle">
                    <p>Shipping Information</p>
                    <div className="checkoutAddressInputs">
                        <div className="checkoutAddressName">
                            <input type="text" placeholder="First Name" required/>
                            <input type="text" placeholder="Last Name" required/>
                        </div>
                        <input type="text" placeholder="Address" required/>
                        <input type="text" placeholder="Apartment, suite, etc (optional)" />
                        <input type="text" placeholder="City" required/>
                        <div className="checkoutAddressCountry">
                            <input type="text" placeholder="Country" required/>
                            <input type="text" placeholder="City" required/>
                            <input type="text" placeholder="Zipcode" required/>
                        </div>
                        <input type="text" placeholder="Optional Information" />
                        <div className="checkoutAddressLabel">
                            <label htmlFor="saveContact">
                                <input type="checkbox" id="saveContact"/>
                                <span>Save contact information</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="checkoutAddressBottom">
                    <button type="submit">Continue to Shipping</button>
                </div>
            </form>
        </div>
     );
}
 
export default CheckoutAddress;