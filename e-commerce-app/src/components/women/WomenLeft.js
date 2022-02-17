import "../../styles/men/menLeft.css"
import { useState } from "react";

const WomenLeft = () => {

    const [pageOffset, setPageOffset] = useState(0);

    window.addEventListener("scroll", () => {
        setPageOffset(window.pageYOffset);
    })

    console.log(pageOffset);

    return ( 
        <div className="menLeft">
            <div className="menleftdeneme">
            <div className={pageOffset > 165 ? "menLeftFilterFixed" : "menLeftFilter"}>
                <div className="menLeftFilterTop">
                    <p>Filters</p>
                    <button>Clear Filters</button>
                </div>
                <div className="menLeftFilterMiddle">
                   <p>Categories</p>
                    <label htmlFor="shirts">
                        <input type="checkbox" value="Shirts" id="shirts" />
                        Shirts
                    </label>
                    <label htmlFor="t-shirts">
                        <input type="checkbox" value="T-Shirts" id="t-shirts" />
                        T-Shirts
                    </label>
                    <label htmlFor="jackets">
                        <input type="checkbox" value="jackets" id="jackets" />
                        Jackets
                    </label>
                    <label htmlFor="sweaters">
                        <input type="checkbox" value="Sweaters" id="sweaters" />
                        Sweaters
                    </label>
                </div>
                <div className="menLeftFilterBottom">
                    <h3>Colors</h3>
                    <div className="menLeftFilterBottomColors">
                        <div className="black"></div>
                        <div className="white"></div>
                        <div className="red"></div>
                        <div className="blue"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default WomenLeft;