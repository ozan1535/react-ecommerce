import MenLeft from "./MenLeft";
import MenRight from "./MenRight";
import MenTop from "./MenTop";
import "../../styles/men/men.css";
import { useState } from "react";

const Men = ({setFavProduct, setFavProductImages}) => {

    let [counted, setCounted] = useState(0);

    return ( 
        <div className="men">
            <MenTop counted={counted}/>
            <div className="menProducts">
                <MenLeft />
                <MenRight setCounted={setCounted} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages}/>
            </div>
        </div>
     );
}
 
export default Men;