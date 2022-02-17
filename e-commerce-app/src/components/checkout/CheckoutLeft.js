import { useState } from "react";

import CheckoutAddress from "./CheckoutAddress";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";


const CheckoutLeft = () => {

    const [component, setComponent] = useState("CheckoutAddress");

    return ( 
        <div className="CheckoutLeft">
            {
                component == "CheckoutAddress" ? <CheckoutAddress setComponent={setComponent} /> :
                component == "CheckoutShipping" ? <CheckoutShipping setComponent={setComponent} /> :
                component == "CheckoutPayment" ? <CheckoutPayment /> : null
            }
        </div>
     );
}
 
export default CheckoutLeft;