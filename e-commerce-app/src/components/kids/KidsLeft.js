import { useState } from "react";
import "../../styles/men/menLeft.css"

const KidsLeft = ({kidsFilter,setKidsFilter}) => {

    let filterkids = (a) => {
        if(kidsFilter.includes(a)){
            setKidsFilter((old) => old.filter(y => y == a));

        }
        else {
            setKidsFilter((old) => [...old, a]);
        }
    }

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
                    <p style={{marginLeft: "5px"}}>
                            <input style={{width: "15px", height: "15px"}} type="checkbox" value="Shirts" id="shirts" onClick={() => filterkids('Shirt')}/>
                        <span style={{fontSize: "16px", marginLeft: "8px"}}>Shirts</span>
                    </p>
                    <p style={{marginLeft: "5px"}}>
                            <input style={{width: "15px", height: "15px"}}  type="checkbox" value="T-Shirts" id="t-shirts" onClick={() => filterkids('T-shirt')}/>
                        
                        <span style={{fontSize: "16px", marginLeft: "8px"}}>T-Shirts</span>
                    </p>
                    <p style={{marginLeft: "5px"}}>
                            <input style={{width: "15px", height: "15px"}}  type="checkbox" value="jackets" id="jackets" onClick={() => filterkids('Jacket')}/>
                        
                        <span style={{fontSize: "16px", marginLeft: "8px"}}>Jackets</span>
                    </p>
                    <p style={{marginLeft: "5px"}}>
                            <input style={{width: "15px", height: "15px"}}  type="checkbox" value="Sweaters" id="sweaters" onClick={ () => filterkids('Sweater')}/>
                        
                        <span style={{fontSize: "16px", marginLeft: "8px"}}>Sweaters</span>
                    </p>
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
 
export default KidsLeft;