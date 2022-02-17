import WomenLeft from "./WomenLeft";
import WomenRight from "./WomenRight";
import WomenTop from "./WomenTop";
import "../../styles/men/men.css";
import { useState } from "react";


const Women = ({setFavProduct, setFavProductImages}) => {

    let [counted, setCounted] = useState(0);

    return ( 
        <div className="men">
            <WomenTop counted={counted}/>
            <div className="menProducts">
                <WomenLeft />
                <WomenRight setCounted={setCounted} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages}/>
            </div>
        </div>
     );
}
 
export default Women;