import KidsLeft from "./KidsLeft";
import KidsRight from "./KidsRight";
import KidsTop from "./KidsTop";
import "../../styles/men/men.css";
import { useState } from "react";


const Kids = ({setFavProduct, setFavProductImages}) => {

    let [counted, setCounted] = useState(0);
    const [kidsFilter, setKidsFilter] = useState([]);

    if(kidsFilter.length == 0){
        setKidsFilter(["Shirt","T-shirt","Jacket","Sweater"]);
    } 

    return ( 
        <div className="men">
            <KidsTop counted={counted}/>
            <div className="menProducts">
                <KidsLeft kidsFilter={kidsFilter} setKidsFilter={setKidsFilter}/>
                <KidsRight kidsFilter={kidsFilter} setCounted={setCounted} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages}/>
            </div>
        </div>
     );
}
 
export default Kids;